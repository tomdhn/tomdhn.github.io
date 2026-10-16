# TxTango argument template generator

`Generate-ArgumentTemplates.ps1` reads the operation catalog from `script.js`, downloads the official TxTango ASMX WSDL, and generates `argument-templates.js`. The generated XML contains the operation parameters and schema element structure, excluding the shared `Login` block.

Run it from the repository root in Windows PowerShell:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools\Generate-ArgumentTemplates.ps1
```

The page loads `argument-templates.js` before `script.js`. The hand-authored templates for `Get_Users`, `Get_Drivers`, and `Get_Drivers_V2` override generated versions so the examples supplied for those calls remain unchanged. Repeated XSD elements are represented once as editable examples; for XSD `choice` groups, the first option is used.
