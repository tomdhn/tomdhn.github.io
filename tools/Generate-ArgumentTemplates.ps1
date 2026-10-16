param(
  [string]$WsdlUrl = "https://txtangob.tx-connect.com/IWS_ASMX/service.asmx?WSDL",
  [string]$OutputPath = (Join-Path (Split-Path $PSScriptRoot -Parent) "argument-templates.js")
)

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path $PSScriptRoot -Parent
$scriptPath = Join-Path $projectRoot "script.js"
$scriptText = Get-Content -LiteralPath $scriptPath -Raw
$marker = 'const operationNames = `'
$listStart = $scriptText.IndexOf($marker, [StringComparison]::Ordinal)
if ($listStart -lt 0) {
  throw "Could not find operationNames in script.js."
}
$listStart += $marker.Length
$listEnd = $scriptText.IndexOf('`', $listStart)
if ($listEnd -lt 0) {
  throw "Could not find the end of operationNames in script.js."
}
$operationNames = $scriptText.Substring($listStart, $listEnd - $listStart).Trim() -split '\s+'

$response = Invoke-WebRequest -Uri $WsdlUrl -UseBasicParsing
$wsdl = [xml]$response.Content
$schemaNamespace = "http://www.w3.org/2001/XMLSchema"
$targetNamespace = "http://transics.org"
$namespaces = [System.Xml.XmlNamespaceManager]::new($wsdl.NameTable)
$namespaces.AddNamespace("s", $schemaNamespace)
$namespaces.AddNamespace("tns", $targetNamespace)
foreach ($attribute in $wsdl.DocumentElement.Attributes) {
  if ($attribute.Prefix -eq "xmlns" -and -not $namespaces.LookupNamespace($attribute.LocalName)) {
    $namespaces.AddNamespace($attribute.LocalName, $attribute.Value)
  }
}

$types = @{}
$groups = @{}
$globalElements = @{}
foreach ($schema in $wsdl.SelectNodes("//*[local-name()='schema']")) {
  $schemaTargetNamespace = $schema.GetAttribute("targetNamespace")
  foreach ($type in $schema.SelectNodes("./s:complexType | ./s:simpleType", $namespaces)) {
    if ($type.HasAttribute("name")) {
      $types["{$schemaTargetNamespace}$($type.GetAttribute('name'))"] = $type
    }
  }
  foreach ($group in $schema.SelectNodes("./s:group", $namespaces)) {
    if ($group.HasAttribute("name")) {
      $groups["{$schemaTargetNamespace}$($group.GetAttribute('name'))"] = $group
    }
  }
  foreach ($element in $schema.SelectNodes("./s:element[@name]", $namespaces)) {
    $globalElements["{$schemaTargetNamespace}$($element.GetAttribute('name'))"] = $element
  }
}

function Get-QNameKey([string]$qname) {
  if (-not $qname) { return "" }
  $parts = $qname.Split(":")
  if ($parts.Length -eq 1) {
    return "{$targetNamespace}$($parts[0])"
  }
  $namespaceUri = $namespaces.LookupNamespace($parts[0])
  if (-not $namespaceUri) { return "" }
  return "{$namespaceUri}$($parts[1])"
}

function Get-LocalName([string]$qname) {
  if (-not $qname) { return "" }
  $parts = $qname.Split(":")
  return $parts[$parts.Length - 1]
}

function Get-ParticlesMarkup($node, [string[]]$typeStack, [int]$depth) {
  $parts = [System.Collections.Generic.List[string]]::new()
  foreach ($child in $node.ChildNodes) {
    if (-not ($child -is [System.Xml.XmlElement]) -or $child.NamespaceURI -ne $schemaNamespace) { continue }
    if ($child.LocalName -in @("sequence", "all")) {
      $markup = Get-ParticlesMarkup $child $typeStack $depth
      if ($markup) { $parts.Add($markup) }
    } elseif ($child.LocalName -eq "choice") {
      $choice = $child.ChildNodes | Where-Object {
        $_ -is [System.Xml.XmlElement] -and
        $_.NamespaceURI -eq $schemaNamespace -and
        $_.LocalName -in @("element", "sequence", "all", "choice", "group")
      } | Select-Object -First 1
      if ($choice) {
        $markup = if ($choice.LocalName -eq "element") {
          Render-ElementMarkup $choice $typeStack ($depth + 1)
        } else {
          Get-ParticlesMarkup $choice $typeStack $depth
        }
        if ($markup) { $parts.Add($markup) }
      }
    } elseif ($child.LocalName -eq "element") {
      $parts.Add((Render-ElementMarkup $child $typeStack ($depth + 1)))
    } elseif ($child.LocalName -eq "group" -and $child.HasAttribute("ref")) {
      $group = $groups[(Get-QNameKey $child.GetAttribute("ref"))]
      if ($group) {
        $markup = Get-ParticlesMarkup $group $typeStack $depth
        if ($markup) { $parts.Add($markup) }
      }
    }
  }
  return ($parts -join "`n")
}

function Get-ComplexTypeMarkup($complexType, [string[]]$typeStack, [int]$depth) {
  if ($depth -gt 20) { return "" }
  $content = $complexType.SelectSingleNode("./s:complexContent/*[self::s:extension or self::s:restriction]", $namespaces)
  if ($content) {
    $parts = [System.Collections.Generic.List[string]]::new()
    if ($content.LocalName -eq "extension" -and $content.HasAttribute("base")) {
      $baseKey = Get-QNameKey $content.GetAttribute("base")
      if ($baseKey -and $baseKey -notin $typeStack -and $types.ContainsKey($baseKey)) {
        $baseMarkup = Get-ComplexTypeMarkup $types[$baseKey] ($typeStack + $baseKey) ($depth + 1)
        if ($baseMarkup) { $parts.Add($baseMarkup) }
      }
    }
    $ownMarkup = Get-ParticlesMarkup $content $typeStack ($depth + 1)
    if ($ownMarkup) { $parts.Add($ownMarkup) }
    return ($parts -join "`n")
  }

  $simpleContent = $complexType.SelectSingleNode("./s:simpleContent", $namespaces)
  if ($simpleContent) { return "" }
  return Get-ParticlesMarkup $complexType $typeStack ($depth + 1)
}

function Render-ElementMarkup($element, [string[]]$typeStack, [int]$depth) {
  if ($depth -gt 20) { return "" }
  $definition = $element
  if ($element.HasAttribute("ref")) {
    $globalKey = Get-QNameKey $element.GetAttribute("ref")
    if ($globalElements.ContainsKey($globalKey)) { $definition = $globalElements[$globalKey] }
  }
  $elementName = if ($element.HasAttribute("name")) {
    $element.GetAttribute("name")
  } else {
    Get-LocalName $element.GetAttribute("ref")
  }
  if (-not $elementName -or $elementName -notmatch '^[A-Za-z_][A-Za-z0-9_.-]*$') { return "" }

  $childrenMarkup = ""
  $inlineType = $definition.SelectSingleNode("./s:complexType", $namespaces)
  if ($inlineType) {
    $childrenMarkup = Get-ComplexTypeMarkup $inlineType $typeStack ($depth + 1)
  } elseif ($definition.HasAttribute("type")) {
    $typeKey = Get-QNameKey $definition.GetAttribute("type")
    if ($typeKey -and $typeKey -notin $typeStack -and $types.ContainsKey($typeKey) -and
        $types[$typeKey].LocalName -eq "complexType") {
      $childrenMarkup = Get-ComplexTypeMarkup $types[$typeKey] ($typeStack + $typeKey) ($depth + 1)
    }
  }

  $indent = "  " * $depth
  if (-not $childrenMarkup) { return "$indent<$elementName></$elementName>" }
  return "$indent<$elementName>`n$childrenMarkup`n$indent</$elementName>"
}

$templates = [ordered]@{}
$missingOperations = [System.Collections.Generic.List[string]]::new()
$preservedTemplates = @("Get_Users", "Get_Drivers", "Get_Drivers_V2")
foreach ($operationName in $operationNames) {
  if ($operationName -in $preservedTemplates) { continue }
  $operationElement = $wsdl.SelectSingleNode(
    "//*[local-name()='schema' and @targetNamespace='$targetNamespace']/*[local-name()='element' and @name='$operationName']"
  )
  if (-not $operationElement) {
    $missingOperations.Add($operationName)
    continue
  }
  $operationType = $operationElement.SelectSingleNode("./s:complexType", $namespaces)
  $arguments = if ($operationType) {
    $operationType.SelectSingleNode("./s:sequence | ./s:all", $namespaces)
  } else {
    $null
  }
  $markup = [System.Collections.Generic.List[string]]::new()
  if ($arguments) {
    foreach ($argument in $arguments.ChildNodes) {
      if (-not ($argument -is [System.Xml.XmlElement]) -or $argument.NamespaceURI -ne $schemaNamespace) { continue }
      $argumentName = if ($argument.HasAttribute("name")) {
        $argument.GetAttribute("name")
      } else {
        Get-LocalName $argument.GetAttribute("ref")
      }
      if ($argumentName -eq "Login") { continue }
      if ($argument.LocalName -eq "element") {
        $fragment = Render-ElementMarkup $argument @() 0
        if ($fragment) { $markup.Add($fragment) }
      }
    }
  }
  $templates[$operationName] = $markup -join "`n"
}

if ($missingOperations.Count) {
  throw "WSDL did not contain operation elements: $($missingOperations -join ', ')"
}

$json = ConvertTo-Json -InputObject $templates -Depth 20 -Compress
$output = "// Generated from the TxTango ASMX WSDL. Run tools/Generate-ArgumentTemplates.ps1 to refresh.`r`nwindow.txTangoArgumentTemplates = $json;`r`n"
$outputDirectory = Split-Path -Parent $OutputPath
if (-not (Test-Path -LiteralPath $outputDirectory)) {
  New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
}
Set-Content -LiteralPath $OutputPath -Value $output -Encoding UTF8
Write-Output "Generated templates for $($templates.Count) operations at $OutputPath"
