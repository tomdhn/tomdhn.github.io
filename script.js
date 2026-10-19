"use strict";
    const serviceUrl = "https://txtangob.tx-connect.com/IWS_ASMX/Service.asmx";
    const xmlNamespace = "http://transics.org";
    const operationNames = `
Add_PushSubscriptions
Assign_Driver_To_Group
Assign_Driver_To_Group_V2
Assign_GeoFence
Assign_GeoFence_V2
Assign_Group_To_Dispatcher
Assign_Resources_To_Group
Assign_SocialDriverFreeFields
Assign_SocialPoi_To_Driver
Assign_Trailer_To_Group
Assign_Vehicle_To_Group
Assign_Vehicles_To_Dispatchers
Cancel_Planning
Cancel_Planning_V2
Cancel_RddDownload
Control_Corridor
Delete_Dispatcher
Delete_Files_From_OBC
Export_ViaRoute_GPX
Get_AbsenceCodes
Get_Absences
Get_Absences_V2
Get_AccessTestResult
Get_ActivityList
Get_ActivityList_V2
Get_ActivityList_V3
Get_ActivityRemarks
Get_ActivityReport
Get_ActivityReportDetail
Get_ActivityReportDetail_V10
Get_ActivityReportDetail_V11
Get_ActivityReportDetail_V12
Get_ActivityReportDetail_V2
Get_ActivityReportDetail_V3
Get_ActivityReportDetail_V4
Get_ActivityReportDetail_V5
Get_ActivityReportDetail_V6
Get_ActivityReportDetail_V7
Get_ActivityReportDetail_V8
Get_ActivityReportDetail_V9
Get_ActivityReport_V10
Get_ActivityReport_V11
Get_ActivityReport_V2
Get_ActivityReport_V3
Get_ActivityReport_V4
Get_ActivityReport_V5
Get_ActivityReport_V6
Get_ActivityReport_V7
Get_ActivityReport_V8
Get_ActivityReport_V9
Get_ActivityTrailerReport
Get_AlarmMessageTypes
Get_AlarmMessages
Get_AlarmMessages_V2
Get_AlarmMessages_V3
Get_AlarmMessages_V4
Get_AlarmMessages_V5
Get_AlarmMessages_V6
Get_AlarmMessages_V7
Get_AlarmMessages_V8
Get_AlarmMessages_V9
Get_All_SocialGroups
Get_BorderCrossingReport
Get_BorderCrossingReport_V2
Get_BorderCrossingReport_V3
Get_BuildVersion
Get_Calibration
Get_CompanyCards
Get_ConsumptionReport
Get_CostAndCompensationCodes
Get_CostAndCompensationReport
Get_CostAndCompensationReport_V3
Get_Diagnostix
Get_Dispatchers
Get_Dispatchers_V2
Get_Dispatchers_V3
Get_Dispatchers_V4
Get_DistanceReportSummary
Get_DistanceReportSummary_V2
Get_DistanceReportSummary_V3
Get_DriverMappingByVehicle
Get_DriverSocialProfiles
Get_DriverTachoReadoutFiles
Get_Drivers
Get_Drivers_V10
Get_Drivers_V2
Get_Drivers_V3
Get_Drivers_V4
Get_Drivers_V5
Get_Drivers_V6
Get_Drivers_V7
Get_Drivers_V8
Get_Drivers_V9
Get_EcoMonitor_EngineLoad_Report
Get_EcoMonitor_Report
Get_EcoMonitor_Report_V2
Get_EcoMonitor_Report_V3
Get_EcoMonitor_Report_V4
Get_EcoMonitor_Report_V5
Get_EcoMonitor_Report_V6
Get_EcoPerformance
Get_EcoPerformance_Profiles
Get_EcoPerformance_Profiles_V2
Get_EcoScore_Report
Get_EcoScore_Report_V2
Get_Eco_Assistant
Get_Files
Get_Files_V2
Get_GeoFences
Get_GeoFences_V2
Get_GeoFences_V3
Get_GeoZoneEvents
Get_Groups
Get_Groups_V2
Get_InfringementCodes
Get_InfringementReport
Get_Inspection
Get_MagellanAlarm
Get_MagellanData
Get_MagellanData_V2
Get_MagellanData_V3
Get_MagellanData_V4
Get_MagellanGeoZones
Get_MagellanTracers
Get_MagellanTracers_V2
Get_MailboxInfo_V2
Get_Map
Get_MapImage
Get_MapImage_V2
Get_MapImage_V3
Get_MapImage_V4
Get_Map_V2
Get_Map_V3
Get_Map_V4
Get_MergedTachoServiceTimes
Get_Nearest_Position
Get_POIs
Get_POIs_V2
Get_PalletReport
Get_Planning
Get_Planning_Modifications
Get_Planning_Modifications_V10
Get_Planning_Modifications_V2
Get_Planning_Modifications_V3
Get_Planning_Modifications_V4
Get_Planning_Modifications_V5
Get_Planning_Modifications_V6
Get_Planning_Modifications_V7
Get_Planning_Modifications_V8
Get_Planning_Modifications_V9
Get_Planning_UnPlannedInfo
Get_Planning_V2
Get_Planning_V3
Get_Planning_V4
Get_Planning_V5
Get_Planning_V6
Get_PositionFromStreetInfo
Get_Position_Area
Get_Positions
Get_Positions_V2
Get_Positions_V3
Get_Positions_V4
Get_Positions_V5
Get_Positions_V6
Get_Positions_V7
Get_PushSubscriptions
Get_PushedMessagesBackup
Get_PushedMessagesBackupSummary
Get_RddDownloadStatus
Get_RefuelReport
Get_RefuelReport_V2
Get_RefuelReport_V4
Get_Remaining_Driving_Resting_Times
Get_Remaining_Driving_Resting_Times_V2
Get_Remaining_Driving_Resting_Times_V3
Get_Remaining_Driving_Resting_Times_V4
Get_Remaining_Driving_Resting_Times_V5
Get_Remaining_Driving_Resting_Times_V6
Get_Roles
Get_SalaryPreCalculation
Get_SalaryPreCalculation_V2
Get_Scanned_Document
Get_Scanned_Document_V2
Get_Scanned_Document_V3
Get_Scanned_Document_V4
Get_Scanned_Documents
Get_Scanned_Documents_V2
Get_Scanned_Documents_V3
Get_Scanned_Documents_V4
Get_Scanned_Documents_V5
Get_ServerTime
Get_ServiceTimesTachoDetail
Get_ServiceTimesTachoDetail_V2
Get_ServiceTimesTachoDetail_V3
Get_ServiceTimesTachoDetail_V4
Get_ServiceTimesTachoDetail_V5
Get_SmsCommunication
Get_SmsCommunicationConfig
Get_SocialAlarmMessages
Get_SocialDriverBalances
Get_SocialDriverFreeFields
Get_SocialGroups
Get_SocialHourlyRate_Driver
Get_SocialHours_Driver
Get_SocialPoi_To_Driver
Get_SocialProfiles
Get_SocialRatings
Get_SocialRatings_Driver
Get_Social_DriverActivities
Get_StreetInfoFromPosition
Get_SubcontractedVehicles
Get_SummarizedTachoData
Get_TXSocial_Activity
Get_TachoEvents
Get_TelemetricData
Get_TelemetricData_V2
Get_TelemetricData_V3
Get_Temperatures
Get_Temperatures_V2
Get_Temperatures_V3
Get_TextMessages_Inbox
Get_TextMessages_Inbox_V2
Get_TextMessages_Inbox_V3
Get_TextMessages_Inbox_V4
Get_TextMessages_Inbox_V5
Get_TextMessages_Inbox_V6
Get_TextMessages_Outbox
Get_TextMessages_Outbox_V2
Get_TextMessages_Outbox_V3
Get_TextMessages_Outbox_V4
Get_TextMessages_Outbox_V5
Get_TracerDistanceReport
Get_Trailers
Get_Trailers_V2
Get_Trailers_V3
Get_Trailers_V4
Get_Trailers_V5
Get_Trailers_V6
Get_Trailers_V7
Get_TripReportSummary
Get_Users
Get_VehicleActivityInfo
Get_VehicleActivityInfo_V2
Get_VehicleGeozones
Get_VehicleInfo_On_Date
Get_VehicleProfiles
Get_VehicleStatus
Get_VehicleTachoReadoutFiles
Get_Vehicles
Get_Vehicles_V10
Get_Vehicles_V11
Get_Vehicles_V12
Get_Vehicles_V13
Get_Vehicles_V2
Get_Vehicles_V3
Get_Vehicles_V4
Get_Vehicles_V5
Get_Vehicles_V6
Get_Vehicles_V7
Get_Vehicles_V8
Get_Vehicles_V9
Get_ViaRoutes
Get_ViaRoutes_V2
Get_ViaRoutes_V3
Get_ViaRoutes_V4
Get_WhoTracksWhat_Overview
Import_ViaRoute_GPX
Init_File_List
Initiate_RddDownload
Insert_Absences
Insert_Dispatcher
Insert_Dispatcher_V2
Insert_Dispatcher_V3
Insert_Driver
Insert_Driver_V2
Insert_Driver_V3
Insert_Driver_V4
Insert_GeoFence
Insert_GeoFence_V2
Insert_Group
Insert_New_Comment_On_Trip
Insert_New_Job_On_Trip
Insert_New_Place_On_Trip
Insert_New_Product_On_Trip
Insert_POI
Insert_Planning
Insert_Refuelings
Insert_Trailer
Insert_Trailer_V2
Insert_User
Insert_Vehicle
Insert_ViaRoute
Manage_DriverSocialProfiles
Manage_SocialDriverBalances
Manage_SocialHourlyRate_Driver
Manage_SocialRatings_Driver
Remove_Driver_From_Group
Remove_GeoFence_From_Vehicle
Remove_Group_From_Dispatcher
Remove_NextStops
Remove_Resources_From_Group
Remove_SocialDriverFreeFields
Remove_SocialHourlyRate_Driver
Remove_SocialPoi_To_Driver
Remove_SocialRatings_Driver
Remove_Trailer_From_Group
Remove_Vehicle_From_Group
Remove_Vehicles_From_Dispatchers
Remove_ViaRoute_From_Vehicle
Send_Destination
Send_DoorlockCommand
Send_File
Send_GeoFence_To_Vehicle
Send_NextStop
Send_ReeferCommand
Send_SecurityCommand
Send_TextMessage
Send_TextMessage_ReturnID
Send_ViaRoute_To_Vehicle
Set_SmsCommunicationConfig
Set_SubcontractedVehicles
Set_TemperatureSettings
Unassign_GeoFence
Unassign_GeoFence_V2
Update_AlarmMessages_Treated
Update_Dispatcher
Update_Dispatcher_V2
Update_Dispatcher_V3
Update_Driver
Update_Driver_V2
Update_Driver_V3
Update_Driver_V4
Update_Driver_V5
Update_GeoFence
Update_GeoFence_V2
Update_Group
Update_POI
Update_Place_On_Trip
Update_Planning
Update_Planning_V2
Update_PushSubscriptions_Status
Update_SocialDriverFreeFields
Update_SocialPoi_To_Driver
Update_TextMessage_Read
Update_TextMessage_Read_V2
Update_TextMessage_Treated
Update_Trailer
Update_Trailer_V2
Update_Trailer_V3
Update_User
Update_Vehicle
Update_Vehicle_V2
Update_ViaRoute
`.trim().split(/\s+/);

    const suppliedDescriptions = {
      Delete_Dispatcher: "Delete dispatcher.",
      Get_BuildVersion: "Get the web service build version; this can also help check whether the service link is working.",
      Get_Dispatchers: "Get dispatchers.",
      Get_Dispatchers_V2: "Get dispatchers including Transics ID.",
      Get_Dispatchers_V3: "Get dispatchers including UserProfiles.",
      Get_Dispatchers_V4: "Get dispatchers including user rights and user profiles.",
      Get_Drivers: "Get drivers.",
      Get_InfringementCodes: "Retrieves a list of infringement code items.",
      Get_InfringementReport: "Retrieves a list of infringement report items.",
      Get_Inspection: "Get an inspection report.",
      Get_Roles: "Get roles.",
      Get_SocialHourlyRate_Driver: "Get Tx-Social drivers time-stamped fields.",
      Get_SocialHours_Driver: "Get Tx-Social drivers time-stamped fields.",
      Get_Social_DriverActivities: "Get Tx-Social driver activities time-stamped fields.",
      Get_TXSocial_Activity: "Get_TXSocial_Activity.",
      Get_Trailers: "Get trailers.",
      Get_Users: "Get users.",
      Get_Vehicles: "Get a list of all vehicles.",
      Get_Vehicles_V2: "Get a list of all vehicles with next-stop information.",
      Get_Vehicles_V3: "Get vehicles with next-stop information and formatted names for vehicle, driver, and co-driver.",
      Insert_Dispatcher: "Insert dispatcher.",
      Insert_Dispatcher_V2: "Insert dispatcher.",
      Insert_Dispatcher_V3: "Insert dispatcher including user rights and user profiles.",
      Insert_User: "Insert user.",
      Manage_SocialHourlyRate_Driver: "Add or update Tx-Social drivers time-stamped fields.",
      Remove_SocialHourlyRate_Driver: "Remove Tx-Social drivers time-stamped fields.",
      Send_ReeferCommand: "Send_ReeferCommand.",
      Update_Dispatcher: "Update dispatcher.",
      Update_Dispatcher_V2: "Update dispatcher.",
      Update_Dispatcher_V3: "Update dispatcher including user rights and user profiles.",
      Update_User: "Update user."
    };
    const customArgumentTemplates = {
      Get_Users: `      <UserSelection>
        <IncludeInactive>true</IncludeInactive>
        <Identifiers>
          
        </Identifiers>
      </UserSelection>`,
      Get_Drivers: `      <DriverSelection>
        <DateTimeRange>
          <StartDate></StartDate>
          <EndDate></EndDate>
        </DateTimeRange>
        <SelectionFromToday>
          <DateTimeType></DateTimeType>
          <Value></Value>
        </SelectionFromToday>
        <IncludeContactInfo></IncludeContactInfo>
        <IncludePrivateInfo></IncludePrivateInfo>
        <IncludeTechnicalInfo></IncludeTechnicalInfo>
        <IncludeTotalKms></IncludeTotalKms>
        <IncludeLastVehicleInfo></IncludeLastVehicleInfo>
        <IncludeSiteInfo></IncludeSiteInfo>
        <IncludePicture></IncludePicture>
        <IncludeResponsible></IncludeResponsible>
        <IncludeTachoCardInfo></IncludeTachoCardInfo>
        <Persons>
          <Identifier>
            <IdentifierType></IdentifierType>
            <Id></Id>
          </Identifier>
          <Identifier>
            <IdentifierType></IdentifierType>
            <Id></Id>
          </Identifier>
        </Persons>
      </DriverSelection>`,
      Get_Drivers_V2: `      <DriverSelection>
        <DateTimeRange>
          <StartDate></StartDate>
          <EndDate></EndDate>
        </DateTimeRange>
        <SelectionFromToday>
          <DateTimeType></DateTimeType>
          <Value></Value>
        </SelectionFromToday>
        <IncludeContactInfo></IncludeContactInfo>
        <IncludePrivateInfo></IncludePrivateInfo>
        <IncludeTechnicalInfo></IncludeTechnicalInfo>
        <IncludeTotalKms></IncludeTotalKms>
        <IncludeLastVehicleInfo></IncludeLastVehicleInfo>
        <IncludeSiteInfo></IncludeSiteInfo>
        <IncludePicture></IncludePicture>
        <IncludeResponsible></IncludeResponsible>
        <IncludeTachoCardInfo></IncludeTachoCardInfo>
        <Persons>
          <Identifier>
            <IdentifierType></IdentifierType>
            <Id></Id>
          </Identifier>
          <Identifier>
            <IdentifierType></IdentifierType>
            <Id></Id>
          </Identifier>
        </Persons>
      </DriverSelection>`
    };
    const argumentTemplates = Object.assign({}, window.txTangoArgumentTemplates || {}, customArgumentTemplates);

    const groupFor = (name) => {
      if (name.startsWith("Get_")) return "Read";
      if (name.startsWith("Insert_") || name.startsWith("Add_")) return "Create";
      if (name.startsWith("Update_") || name.startsWith("Set_") || name.startsWith("Manage_")) return "Update";
      if (name.startsWith("Assign_") || name.startsWith("Unassign_")) return "Assign";
      if (name.startsWith("Remove_") || name.startsWith("Delete_")) return "Remove";
      return "Command";
    };
    const groupOrder = ["Read", "Create", "Update", "Assign", "Remove", "Command"];
    const versionFor = (name) => {
      const match = name.match(/_V(\d+)$/);
      return match ? `V${match[1]}` : "";
    };
    const operationFamilies = (() => {
      const families = new Map();
      operationNames.forEach((name) => {
        const versionedName = name.match(/_V(\d+)$/);
        const baseName = versionedName ? name.slice(0, versionedName.index) : name;
        if (!families.has(baseName)) families.set(baseName, []);
        families.get(baseName).push(name);
      });
      return Array.from(families, ([baseName, names]) => {
        const orderedNames = names.slice().sort((left, right) => {
          const leftVersion = left === baseName ? 1 : Number(versionFor(left).slice(1));
          const rightVersion = right === baseName ? 1 : Number(versionFor(right).slice(1));
          return leftVersion - rightVersion;
        });
        return {
          baseName,
          names: orderedNames,
          isVersionFamily: orderedNames.length > 1,
          defaultName: orderedNames.includes(baseName) ? baseName : orderedNames[0]
        };
      });
    })();
    const linkFor = (name) => `https://txtangob.tx-connect.com/IWS_ASMX/service.asmx?op=${encodeURIComponent(name)}`;
    const container = document.getElementById("operations");
    const search = document.getElementById("search");
    const bookmarkedGroup = document.getElementById("bookmarked-group");
    const bookmarkedOperations = document.getElementById("bookmarked-operations");
    const bookmarkedCount = document.getElementById("bookmarked-count");
    const bookmarkStatus = document.getElementById("bookmark-status");
    const bookmarkStorageKey = "txtango-bookmarked-operations";
    let bookmarkedFamilies = new Set();
    try {
      const storedBookmarks = localStorage.getItem(bookmarkStorageKey);
      if (storedBookmarks) {
        const parsedBookmarks = JSON.parse(storedBookmarks);
        if (!Array.isArray(parsedBookmarks) || parsedBookmarks.some((name) => typeof name !== "string")) {
          throw new Error("Saved bookmarks have an invalid format.");
        }
        const validFamilies = new Set(operationFamilies.map((family) => family.baseName));
        bookmarkedFamilies = new Set(parsedBookmarks.filter((name) => validFamilies.has(name)));
      }
    } catch (error) {
      bookmarkStatus.textContent = `Could not load bookmarks: ${error.message}`;
    }
    const planningBuilderDialog = document.getElementById("planning-builder-dialog");
    const planningCanvas = document.getElementById("planning-canvas");
    const planningPaletteSearch = document.getElementById("planning-palette-search");
    const planningPaletteList = document.getElementById("planning-palette-list");
    const planningShowAvailable = document.getElementById("planning-show-available");
    const planningBuilderStatus = document.getElementById("planning-builder-status");
    const planningDropTarget = document.getElementById("planning-drop-target");
    let activePlanningBuilder = null;

    function setPlanningElementColor(element, name) {
      const hue = Array.from(name).reduce(
        (value, character) => (value * 31 + character.charCodeAt(0)) % 360,
        0
      );
      element.style.setProperty("--planning-hue", String(hue));
    }

    function openPlanningBuilder(xml, onApply) {
      try {
        validateArguments(xml);
        const parsed = new DOMParser().parseFromString(
          `<argument-fragment xmlns="${xmlNamespace}">${xml}</argument-fragment>`,
          "application/xml"
        );
        const roots = Array.from(parsed.documentElement.children);
        if (roots.length !== 1 || roots[0].localName !== "PlanningInsert") {
          throw new Error("The builder requires one <PlanningInsert> root element.");
        }

        const templateDocument = new DOMParser().parseFromString(
          `<argument-fragment xmlns="${xmlNamespace}">${argumentTemplates.Insert_Planning || ""}</argument-fragment>`,
          "application/xml"
        );
        const templateRoot = Array.from(templateDocument.documentElement.children)
          .find((element) => element.localName === "PlanningInsert");
        const schemaCandidates = new Map();
        let nextCandidateId = 0;

        function collectCandidates(parent, path) {
          Array.from(parent.children).forEach((child) => {
            const elementPath = [...path, child.localName];
            const key = elementPath.join("/");
            if (!schemaCandidates.has(key)) {
              schemaCandidates.set(key, {
                id: `planning-element-${nextCandidateId++}`,
                name: child.localName,
                parentPath: path.join("/"),
                elementPath: key,
                prototype: child.cloneNode(true)
              });
            }
            collectCandidates(child, elementPath);
          });
        }

        if (templateRoot) collectCandidates(templateRoot, [templateRoot.localName]);
        collectCandidates(roots[0], [roots[0].localName]);
        const candidates = Array.from(schemaCandidates.values());
        const candidateById = new Map(candidates.map((candidate) => [candidate.id, candidate]));
        const nodeIds = new WeakMap();
        let nextNodeId = 0;
        let selectedParentId = null;

        function nodeId(element) {
          if (!nodeIds.has(element)) nodeIds.set(element, `planning-node-${nextNodeId++}`);
          return nodeIds.get(element);
        }

        function getSchemaPath(element, parentPath) {
          return parentPath ? `${parentPath}/${element.localName}` : element.localName;
        }

        function renderDropzone(parent, parentPath) {
          const zone = document.createElement("div");
          zone.className = "planning-dropzone";
          zone.dataset.parentId = nodeId(parent);
          zone.dataset.parentPath = parentPath;
          if (zone.dataset.parentId === selectedParentId) zone.classList.add("is-selected");
          zone.setAttribute("aria-label", `Drop planning elements inside ${parentPath}`);
          const children = Array.from(parent.children);
          if (children.length) {
            children.forEach((child) => zone.append(renderPlanningNode(child, parentPath)));
          } else {
            const hint = document.createElement("div");
            hint.className = "planning-drop-hint";
            hint.textContent = "Drop an element here, or select this area and use Add.";
            zone.append(hint);
          }
          return zone;
        }

        function renderPlanningNode(element, parentPath) {
          const elementPath = getSchemaPath(element, parentPath);
          const block = document.createElement("div");
          block.className = "planning-block";
          setPlanningElementColor(block, element.localName);
          const header = document.createElement("div");
          header.className = "planning-block-header";
          const grip = document.createElement("span");
          grip.className = "planning-block-grip";
          grip.setAttribute("aria-hidden", "true");
          grip.textContent = "⋮⋮";
          const name = document.createElement("span");
          name.className = "planning-block-name";
          name.textContent = element.localName;
          header.append(grip, name);
          const selectParent = document.createElement("button");
          selectParent.className = "planning-select-parent";
          selectParent.type = "button";
          selectParent.textContent = nodeId(element) === selectedParentId ? "Selected" : "Select";
          selectParent.setAttribute("aria-label", `Select ${element.localName} as the parent for new elements`);
          selectParent.setAttribute("aria-pressed", String(nodeId(element) === selectedParentId));
          selectParent.dataset.selectParentId = nodeId(element);
          header.append(selectParent);
          const children = Array.from(element.children);
          if (children.length) {
            const remove = document.createElement("button");
            remove.className = "planning-block-remove";
            remove.type = "button";
            remove.textContent = "×";
            remove.setAttribute("aria-label", `Remove ${element.localName} and its children`);
            remove.dataset.removeId = nodeId(element);
            header.append(remove);
          } else {
            const value = document.createElement("input");
            value.className = "planning-block-value";
            value.type = "text";
            value.value = element.textContent;
            value.setAttribute("aria-label", `${element.localName} value`);
            value.dataset.valueId = nodeId(element);
            header.append(value);
            const remove = document.createElement("button");
            remove.className = "planning-block-remove";
            remove.type = "button";
            remove.textContent = "×";
            remove.setAttribute("aria-label", `Remove ${element.localName}`);
            remove.dataset.removeId = nodeId(element);
            header.append(remove);
          }
          block.append(header);
          if (children.length || candidates.some((candidate) => candidate.parentPath === elementPath)) {
            const childContainer = document.createElement("div");
            childContainer.className = "planning-block-children";
            childContainer.append(renderDropzone(element, elementPath));
            block.append(childContainer);
          }
          return block;
        }

        function updateSelectedTarget() {
          const selected = planningCanvas.querySelector(
            `.planning-dropzone[data-parent-id="${selectedParentId}"]`
          );
          planningCanvas.querySelectorAll(".planning-dropzone").forEach((zone) => {
            zone.classList.toggle("is-selected", zone === selected);
          });
          planningDropTarget.textContent = selected
            ? `Adding to: ${selected.dataset.parentPath}`
            : "Select a drop area";
        }

        function renderCanvas() {
          const root = roots[0];
          if (!findNodeById(root, selectedParentId)) selectedParentId = nodeId(root);
          planningCanvas.replaceChildren();
          const rootBlock = document.createElement("div");
          rootBlock.className = "planning-root-block";
          const rootHeader = document.createElement("div");
          rootHeader.className = "planning-root-header";
          const rootName = document.createElement("span");
          rootName.textContent = `<${root.localName}>`;
          const selectRoot = document.createElement("button");
          selectRoot.className = "planning-select-parent";
          selectRoot.type = "button";
          selectRoot.textContent = nodeId(root) === selectedParentId ? "Selected" : "Select";
          selectRoot.setAttribute("aria-label", `Select ${root.localName} as the parent for new elements`);
          selectRoot.setAttribute("aria-pressed", String(nodeId(root) === selectedParentId));
          selectRoot.dataset.selectParentId = nodeId(root);
          rootHeader.append(rootName, selectRoot);
          rootBlock.append(rootHeader, renderDropzone(root, root.localName));
          planningCanvas.append(rootBlock);
          updateSelectedTarget();
        }

        function renderPalette() {
          const query = planningPaletteSearch.value.trim().toLocaleLowerCase();
          const selectedZone = planningCanvas.querySelector(
            `.planning-dropzone[data-parent-id="${selectedParentId}"]`
          );
          const selectedPath = selectedZone ? selectedZone.dataset.parentPath : "";
          planningPaletteList.replaceChildren();
          candidates
            .filter((candidate) => !planningShowAvailable.checked || candidate.parentPath === selectedPath)
            .filter((candidate) =>
              `${candidate.name} ${candidate.parentPath} ${candidate.elementPath}`.toLocaleLowerCase().includes(query)
            )
            .forEach((candidate) => {
              const item = document.createElement("div");
              item.className = "planning-palette-item";
              setPlanningElementColor(item, candidate.name);
              item.draggable = true;
              item.dataset.candidateId = candidate.id;
              const name = document.createElement("span");
              name.className = "planning-palette-name";
              name.textContent = `<${candidate.name}>`;
              const add = document.createElement("button");
              add.className = "planning-palette-add";
              add.type = "button";
              add.textContent = "Add";
              add.setAttribute("aria-label", `Add ${candidate.name} inside the selected parent`);
              add.dataset.addCandidateId = candidate.id;
              add.disabled = candidate.parentPath !== selectedPath;
              if (add.disabled) add.title = `Select a parent inside ${candidate.parentPath} to enable Add.`;
              const path = document.createElement("span");
              path.className = "planning-palette-path";
              path.textContent = `Inside ${candidate.parentPath}`;
              item.append(name, add, path);
              item.addEventListener("dragstart", (event) => {
                event.dataTransfer.setData("text/plain", candidate.id);
                event.dataTransfer.effectAllowed = "copy";
              });
              planningPaletteList.append(item);
            });
        }

        function addCandidate(candidateId, parentId) {
          const candidate = candidateById.get(candidateId);
          const parent = Array.from(planningCanvas.querySelectorAll(".planning-dropzone"))
            .find((zone) => zone.dataset.parentId === parentId);
          if (!candidate || !parent) {
            planningBuilderStatus.textContent = "Select a valid drop area before adding an element.";
            return;
          }
          if (parent.dataset.parentPath !== candidate.parentPath) {
            planningBuilderStatus.textContent = `<${candidate.name}> can only be added inside ${candidate.parentPath}.`;
            return;
          }
          const parentNode = findNodeById(roots[0], parentId);
          if (!parentNode) {
            planningBuilderStatus.textContent = "The selected planning element is no longer available.";
            return;
          }
          selectedParentId = parentId;
          const element = candidate.prototype.cloneNode(false);
          parentNode.appendChild(element);
          planningBuilderStatus.textContent = `Added <${candidate.name}>.`;
          renderCanvas();
          renderPalette();
        }

        function findNodeById(root, id) {
          if (nodeId(root) === id) return root;
          for (const child of Array.from(root.children)) {
            const result = findNodeById(child, id);
            if (result) return result;
          }
          return null;
        }

        selectedParentId = nodeId(roots[0]);
        activePlanningBuilder = {
          root: roots[0],
          nodeId,
          renderCanvas,
          renderPalette,
          addCandidate,
          selectParent(parentId) {
            selectedParentId = parentId;
          },
          getSelectedParent() {
            return selectedParentId;
          },
          onApply
        };
        planningBuilderStatus.textContent = "";
        planningPaletteSearch.value = "";
        planningShowAvailable.checked = true;
        renderCanvas();
        renderPalette();
        planningBuilderDialog.showModal();
      } catch (error) {
        throw error;
      }
    }

    planningCanvas.addEventListener("click", (event) => {
      if (!activePlanningBuilder) return;
      const selectParent = event.target.closest("[data-select-parent-id]");
      if (selectParent) {
        activePlanningBuilder.selectParent(selectParent.dataset.selectParentId);
        activePlanningBuilder.renderCanvas();
        activePlanningBuilder.renderPalette();
        planningBuilderStatus.textContent = `Selected ${findPlanningNode(
          activePlanningBuilder.root,
          selectParent.dataset.selectParentId,
          activePlanningBuilder.nodeId
        ).localName} as the parent.`;
        return;
      }
      const removeButton = event.target.closest("[data-remove-id]");
      if (removeButton) {
        const target = findPlanningNode(activePlanningBuilder.root, removeButton.dataset.removeId, activePlanningBuilder.nodeId);
        if (target && target !== activePlanningBuilder.root) {
          target.remove();
          planningBuilderStatus.textContent = `Removed <${target.localName}>.`;
          activePlanningBuilder.renderCanvas();
          activePlanningBuilder.renderPalette();
        }
        return;
      }
      const zone = event.target.closest(".planning-dropzone");
      if (zone) {
        activePlanningBuilder.selectParent(zone.dataset.parentId);
        activePlanningBuilder.renderCanvas();
        activePlanningBuilder.renderPalette();
      }
    });
    planningCanvas.addEventListener("input", (event) => {
      if (!activePlanningBuilder || !event.target.matches("[data-value-id]")) return;
      const node = findPlanningNode(activePlanningBuilder.root, event.target.dataset.valueId, activePlanningBuilder.nodeId);
      if (node) node.textContent = event.target.value;
    });
    planningCanvas.addEventListener("dragover", (event) => {
      const zone = event.target.closest(".planning-dropzone");
      if (!zone || !activePlanningBuilder) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "copy";
      zone.classList.add("is-over");
    });
    planningCanvas.addEventListener("dragleave", (event) => {
      const zone = event.target.closest(".planning-dropzone");
      if (zone && !zone.contains(event.relatedTarget)) zone.classList.remove("is-over");
    });
    planningCanvas.addEventListener("drop", (event) => {
      const zone = event.target.closest(".planning-dropzone");
      if (!zone || !activePlanningBuilder) return;
      event.preventDefault();
      zone.classList.remove("is-over");
      activePlanningBuilder.addCandidate(event.dataTransfer.getData("text/plain"), zone.dataset.parentId);
    });
    planningPaletteSearch.addEventListener("input", () => activePlanningBuilder?.renderPalette());
    planningShowAvailable.addEventListener("change", () => activePlanningBuilder?.renderPalette());
    planningPaletteList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-add-candidate-id]");
      if (!button || !activePlanningBuilder) return;
      activePlanningBuilder.addCandidate(button.dataset.addCandidateId, activePlanningBuilder.getSelectedParent());
    });
    document.getElementById("planning-clear-all").addEventListener("click", () => {
      if (!activePlanningBuilder) return;
      while (activePlanningBuilder.root.firstChild) {
        activePlanningBuilder.root.removeChild(activePlanningBuilder.root.firstChild);
      }
      activePlanningBuilder.selectParent(activePlanningBuilder.nodeId(activePlanningBuilder.root));
      activePlanningBuilder.renderCanvas();
      activePlanningBuilder.renderPalette();
      planningBuilderStatus.textContent = "Cleared all planning elements. The <PlanningInsert> root was kept.";
    });
    document.getElementById("planning-builder-apply").addEventListener("click", () => {
      if (!activePlanningBuilder) return;
      try {
        const xml = new XMLSerializer().serializeToString(activePlanningBuilder.root);
        validateArguments(xml);
        activePlanningBuilder.onApply(xml);
        planningBuilderDialog.close();
      } catch (error) {
        planningBuilderStatus.textContent = `Could not apply planning: ${error.message}`;
      }
    });
    document.getElementById("planning-builder-close").addEventListener("click", () => planningBuilderDialog.close());
    document.getElementById("planning-builder-cancel").addEventListener("click", () => planningBuilderDialog.close());
    planningBuilderDialog.addEventListener("close", () => { activePlanningBuilder = null; });

    function findPlanningNode(root, id, nodeId) {
      if (nodeId(root) === id) return root;
      for (const child of Array.from(root.children)) {
        const result = findPlanningNode(child, id, nodeId);
        if (result) return result;
      }
      return null;
    }

    function saveBookmarks(bookmarks) {
      try {
        localStorage.setItem(bookmarkStorageKey, JSON.stringify(Array.from(bookmarks)));
      } catch (error) {
        throw new Error(`Could not save bookmarks to browser storage: ${error.message}`);
      }
    }

    function updateBookmarkButton(button, familyName) {
      const isBookmarked = bookmarkedFamilies.has(familyName);
      button.textContent = isBookmarked ? "★" : "☆";
      button.setAttribute("aria-pressed", String(isBookmarked));
      button.setAttribute(
        "aria-label",
        `${isBookmarked ? "Remove bookmark from" : "Bookmark"} ${familyName}`
      );
      button.title = isBookmarked ? "Remove bookmark" : "Bookmark this call";
    }

    function renderOperations() {
      const groupSections = new Map();
      for (const group of groupOrder) {
        const section = document.createElement("section");
        section.className = "group";
        section.dataset.group = group;
        groupSections.set(group, section);
        const heading = document.createElement("h2");
        heading.className = "group-heading";
        heading.append(document.createTextNode(group));
        const count = document.createElement("span");
        count.className = "group-count";
        count.textContent = String(operationFamilies.filter((family) => groupFor(family.baseName) === group).length);
        heading.append(count);
        section.append(heading);

        for (const family of operationFamilies.filter((item) => groupFor(item.baseName) === group)) {
          let currentName = family.defaultName;
          const versionXml = new Map();
          const details = document.createElement("details");
          details.className = "operation";
          details.dataset.group = group;
          details.dataset.name = family.names.join(" ").toLowerCase();
          details.dataset.operationCount = String(family.names.length);
          details.dataset.family = family.baseName;
          const summary = document.createElement("summary");
          const badge = document.createElement("span");
          badge.className = "verb";
          badge.textContent = "SOAP";
          const label = document.createElement("span");
          label.className = "op-name";
          label.textContent = family.isVersionFamily ? family.baseName : currentName;
          summary.append(badge, label);
          const bookmarkButton = document.createElement("button");
          bookmarkButton.className = "bookmark-button";
          bookmarkButton.type = "button";
          updateBookmarkButton(bookmarkButton, family.baseName);
          bookmarkButton.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            const updated = new Set(bookmarkedFamilies);
            if (updated.has(family.baseName)) updated.delete(family.baseName);
            else updated.add(family.baseName);
            try {
              saveBookmarks(updated);
              bookmarkedFamilies = updated;
              updateBookmarkButton(bookmarkButton, family.baseName);
              const destination = bookmarkedFamilies.has(family.baseName)
                ? bookmarkedOperations
                : groupSections.get(group);
              destination.append(details);
              bookmarkStatus.textContent = "";
              filterOperations();
            } catch (error) {
              bookmarkStatus.textContent = error.message;
            }
          });
          let versionSelect = null;
          const versionControls = document.createElement("span");
          versionControls.className = "version-controls";
          if (family.isVersionFamily) {
            versionSelect = document.createElement("select");
            versionSelect.className = "version-select";
            versionSelect.setAttribute("aria-label", `Select ${family.baseName} version`);
            family.names.forEach((operationName) => {
              const option = document.createElement("option");
              option.value = operationName;
              option.textContent = operationName === family.baseName ? "V1" : versionFor(operationName);
              versionSelect.append(option);
            });
            versionSelect.value = currentName;
            versionSelect.addEventListener("click", (event) => event.stopPropagation());
            versionControls.append(versionSelect);
          } else {
            const version = versionFor(currentName);
            if (version) {
              const versionBadge = document.createElement("span");
              versionBadge.className = "version";
              versionBadge.textContent = version;
              versionControls.append(versionBadge);
            }
          }
          versionControls.append(bookmarkButton);
          summary.append(versionControls);

          const body = document.createElement("div");
          body.className = "op-body";
          const description = document.createElement("p");
          description.textContent = suppliedDescriptions[currentName] || "Open the service documentation for this operation's details.";
          const argsId = `args-${family.baseName}`;
          const requestLabel = document.createElement("label");
          requestLabel.className = "request-label";
          requestLabel.htmlFor = argsId;
          requestLabel.textContent = "Operation arguments";
          const editorSwitch = document.createElement("div");
          editorSwitch.className = "editor-switch";
          editorSwitch.setAttribute("role", "group");
          editorSwitch.setAttribute("aria-label", `${family.baseName} argument editor mode`);
          const xmlMode = document.createElement("button");
          xmlMode.className = "editor-mode";
          xmlMode.type = "button";
          xmlMode.textContent = "XML";
          xmlMode.setAttribute("aria-pressed", "false");
          const fieldsMode = document.createElement("button");
          fieldsMode.className = "editor-mode";
          fieldsMode.type = "button";
          fieldsMode.textContent = "Fields";
          fieldsMode.setAttribute("aria-pressed", "true");
          editorSwitch.append(xmlMode, fieldsMode);
          const editor = document.createElement("textarea");
          editor.className = "xml-editor";
          editor.id = argsId;
          editor.spellcheck = false;
          editor.setAttribute("aria-label", `${currentName} operation arguments as XML`);
          editor.placeholder = "Add this operation's XML argument elements here.";
          editor.value = argumentTemplates[currentName] || "";
          const fieldEditor = document.createElement("div");
          fieldEditor.className = "field-editor";
          fieldEditor.hidden = false;
          fieldEditor.setAttribute("aria-label", `${currentName} operation arguments as fields`);
          const fieldHint = document.createElement("p");
          fieldHint.className = "field-hint";
          fieldHint.textContent = "Fields reflect the current XML. Check Omit to leave an element out of the request body.";
          const omitAllLabel = document.createElement("label");
          omitAllLabel.className = "omit-field omit-all";
          const omitAll = document.createElement("input");
          omitAll.type = "checkbox";
          omitAll.setAttribute("aria-label", "Omit all operation argument fields");
          omitAllLabel.append(omitAll, document.createTextNode("Omit all fields"));
          const fieldContainer = document.createElement("div");
          fieldContainer.className = "field-editor-content";
          fieldEditor.append(fieldHint, omitAllLabel, fieldContainer);
          let fieldModel = null;
          let fieldsDirty = false;
          function renderArgumentFields() {
            fieldModel = createFieldEditor(editor.value, fieldContainer, currentName);
            omitAll.checked = false;
            omitAll.indeterminate = false;
            omitAllLabel.hidden = fieldModel.fields.length === 0;
            fieldModel.fields.forEach(({ omit }) => omit.addEventListener("change", () => {
              fieldsDirty = true;
              const omittedCount = fieldModel.fields.filter((field) => field.omit.checked).length;
              omitAll.checked = omittedCount === fieldModel.fields.length;
              omitAll.indeterminate = omittedCount > 0 && omittedCount < fieldModel.fields.length;
            }));
            fieldModel.fields.forEach(({ input }) => input.addEventListener("input", () => { fieldsDirty = true; }));
            fieldsDirty = false;
          }
          renderArgumentFields();
          editor.hidden = true;
          omitAll.addEventListener("change", () => {
            fieldsDirty = true;
            fieldModel?.fields.forEach(({ omit }) => { omit.checked = omitAll.checked; });
            omitAll.indeterminate = false;
          });
          xmlMode.addEventListener("click", () => {
            if (fieldEditor.hidden) return;
            if (fieldsDirty) editor.value = serializeFieldModel(fieldModel);
            fieldsDirty = false;
            editor.hidden = false;
            fieldEditor.hidden = true;
            xmlMode.setAttribute("aria-pressed", "true");
            fieldsMode.setAttribute("aria-pressed", "false");
          });
          fieldsMode.addEventListener("click", () => {
            if (!fieldEditor.hidden) return;
            try {
              renderArgumentFields();
              editor.hidden = true;
              fieldEditor.hidden = false;
              xmlMode.setAttribute("aria-pressed", "false");
              fieldsMode.setAttribute("aria-pressed", "true");
              status.textContent = "";
            } catch (error) {
              status.textContent = error.message;
            }
          });
          if (versionSelect) {
            versionSelect.addEventListener("change", () => {
            if (!fieldEditor.hidden) versionXml.set(currentName, fieldsDirty ? serializeFieldModel(fieldModel) : editor.value);
              else versionXml.set(currentName, editor.value);
              currentName = versionSelect.value;
              if (planningBuilderButton) planningBuilderButton.hidden = currentName !== "Insert_Planning";
              editor.value = versionXml.has(currentName) ? versionXml.get(currentName) : argumentTemplates[currentName] || "";
              editor.setAttribute("aria-label", `${currentName} operation arguments as XML`);
              fieldEditor.setAttribute("aria-label", `${currentName} operation arguments as fields`);
              reset.setAttribute("aria-label", `Reset ${currentName} arguments to default`);
              description.textContent = suppliedDescriptions[currentName] || "Open the service documentation for this operation's details.";
              link.href = linkFor(currentName);
              link.textContent = `Open ${currentName} documentation ↗`;
              response.hidden = true;
              responseStatus.textContent = "";
              responseContent.textContent = "";
              responseContent.dataset.raw = "";
              status.textContent = "";
              if (!fieldEditor.hidden) renderArgumentFields();
            });
          }
          const actions = document.createElement("div");
          actions.className = "request-actions";
          let planningBuilderButton = null;
          if (family.names.includes("Insert_Planning")) {
            planningBuilderButton = document.createElement("button");
            planningBuilderButton.className = "tool-button";
            planningBuilderButton.classList.add("planning-launch-button");
            planningBuilderButton.type = "button";
            planningBuilderButton.textContent = "Planning builder";
            planningBuilderButton.hidden = currentName !== "Insert_Planning";
            planningBuilderButton.addEventListener("click", (event) => {
              event.preventDefault();
              event.stopPropagation();
            });
            planningBuilderButton.addEventListener("click", () => {
              try {
                const currentXml = !fieldEditor.hidden && fieldsDirty
                  ? serializeFieldModel(fieldModel)
                  : editor.value;
                openPlanningBuilder(currentXml, (xml) => {
                  editor.value = xml;
                  versionXml.set(currentName, xml);
                  status.textContent = "";
                  if (!fieldEditor.hidden) renderArgumentFields();
                });
                status.textContent = "";
              } catch (error) {
                status.textContent = `Could not open planning builder: ${error.message}`;
              }
            });
            summary.append(planningBuilderButton);
          }
          const reset = document.createElement("button");
          reset.className = "tool-button";
          reset.type = "button";
          reset.textContent = "Reset";
          reset.setAttribute("aria-label", `Reset ${currentName} arguments to default`);
          reset.addEventListener("click", () => {
            editor.value = argumentTemplates[currentName] || "";
            versionXml.set(currentName, editor.value);
            status.textContent = "";
            if (!fieldEditor.hidden) {
              try {
                renderArgumentFields();
              } catch (error) {
                status.textContent = error.message;
              }
            }
          });
          const send = document.createElement("button");
          send.className = "send-button";
          send.type = "button";
          send.textContent = "Send request";
          const status = document.createElement("span");
          status.className = "request-status";
          status.setAttribute("role", "status");
          actions.append(send, reset);
          actions.append(status);
          const response = document.createElement("section");
          response.className = "response-box";
          response.hidden = true;
          const responseHeading = document.createElement("div");
          responseHeading.className = "response-heading";
          const responseStatus = document.createElement("span");
          const responseLabel = document.createElement("span");
          responseLabel.textContent = "Response";
          responseStatus.className = "response-status";
          responseHeading.append(responseLabel, responseStatus);
          const clearResponse = document.createElement("button");
          clearResponse.className = "export-button";
          clearResponse.type = "button";
          clearResponse.textContent = "Clear";
          clearResponse.setAttribute("aria-label", `Clear ${family.baseName} response`);
          clearResponse.addEventListener("click", () => {
            response.hidden = true;
            responseStatus.textContent = "";
            responseContent.textContent = "";
            responseContent.dataset.raw = "";
            status.textContent = "";
          });
          const exportXml = document.createElement("button");
          exportXml.className = "export-button";
          exportXml.type = "button";
          exportXml.textContent = "Export as XML";
          exportXml.addEventListener("click", () => downloadFile(`${currentName}-response.xml`, responseContent.textContent, "application/xml;charset=utf-8"));
          const exportCsv = document.createElement("button");
          exportCsv.className = "export-button";
          exportCsv.type = "button";
          exportCsv.textContent = "Export as CSV";
          exportCsv.addEventListener("click", () => {
            try {
              downloadFile(`${currentName}-response.csv`, xmlToCsv(responseContent.dataset.raw || ""), "text/csv;charset=utf-8");
            } catch (error) {
              status.textContent = `CSV export failed: ${error.message}`;
            }
          });
          responseHeading.append(clearResponse, exportXml, exportCsv);
          const responseContent = document.createElement("pre");
          responseContent.className = "response-content";
          response.append(responseHeading, responseContent);
          send.addEventListener("click", () => {
            const argumentsXml = fieldEditor.hidden ? editor.value : serializeFieldModel(fieldModel);
            sendRequest(currentName, argumentsXml, send, status, response, responseStatus, responseContent);
          });
          const link = document.createElement("a");
          link.className = "op-link";
          link.href = linkFor(currentName);
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.textContent = `Open ${currentName} documentation ↗`;
          body.append(description, requestLabel, editorSwitch, editor, fieldEditor, actions, response, link);
          details.append(summary, body);
          section.append(details);
        }
        container.append(section);
      }
      container.querySelectorAll(".operation").forEach((details) => {
        if (bookmarkedFamilies.has(details.dataset.family)) bookmarkedOperations.append(details);
      });
    }

    function filterOperations() {
      const query = search.value.trim().toLowerCase();
      const allOperations = [
        ...container.querySelectorAll(".operation"),
        ...bookmarkedOperations.querySelectorAll(".operation")
      ];
      let visible = 0;
      allOperations.forEach((operation) => {
        const matches = operation.dataset.name.includes(query);
        operation.hidden = !matches;
        if (matches) visible += Number(operation.dataset.operationCount);
      });
      container.querySelectorAll(".group").forEach((section) => {
        const visibleInGroup = allOperations.filter((operation) =>
          operation.dataset.group === section.dataset.group &&
          operation.dataset.name.includes(query)
        ).length;
        section.hidden = visibleInGroup === 0;
        section.querySelector(".group-count").textContent = String(visibleInGroup);
      });
      const visibleBookmarks = allOperations.filter((operation) =>
        bookmarkedFamilies.has(operation.dataset.family) && operation.dataset.name.includes(query)
      ).length;
      bookmarkedGroup.hidden = visibleBookmarks === 0;
      bookmarkedCount.textContent = String(visibleBookmarks);
      document.getElementById("stats").innerHTML = `<strong>${visible}</strong> of <strong>${operationNames.length}</strong> operations`;
      document.getElementById("empty").style.display = visible ? "none" : "block";
    }

    function escapeXml(value) {
      return value.replace(/[<>&'"]/g, (character) => ({
        "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;"
      })[character]);
    }

    function readLogin() {
      const values = readLoginFields();
      const missing = Object.entries(values).filter(([, value]) => !value.trim()).map(([name]) => name);
      // ignore missing fields for datetime, version, application name, applicatoin version, pc name and language, as these are optional
      const optionalFields = ["DateTime", "Version", "ApplicationName", "ApplicationVersion", "PcName", "Language"];
      const requiredMissing = missing.filter((name) => !optionalFields.includes(name));
      if (requiredMissing.length) throw new Error(`Missing required login fields: ${requiredMissing.join(", ")}`);
      return values;
    }

    const loginStorageKey = "txtango-saved-logins";
    const loginFieldIds = {
      DateTime: "login-datetime",
      Version: "login-version",
      Dispatcher: "login-dispatcher",
      Password: "login-password",
      SystemNr: "login-system-number",
      ApplicationName: "login-application-name",
      ApplicationVersion: "login-application-version",
      PcName: "login-pc-name",
      Integrator: "login-integrator",
      Language: "login-language"
    };
    const loginStatus = document.getElementById("login-status");
    const savedLoginPanel = document.getElementById("saved-logins");
    const savedLoginList = document.getElementById("saved-login-list");
    const savedLoginSearch = document.getElementById("saved-login-search");
    const saveLoginForm = document.getElementById("save-login-form");
    const saveLoginName = document.getElementById("save-login-name");
    let savedLogins = [];
    let loginStorageAvailable = true;

    function validateLoginProfiles(value) {
      if (!Array.isArray(value)) throw new Error("The file must contain a list of saved logins.");
      const names = new Set();
      return value.map((profile) => {
        if (!profile || typeof profile.name !== "string" || !profile.name.trim() ||
            !profile.values || typeof profile.values !== "object" || Array.isArray(profile.values)) {
          throw new Error("Each saved login must have a name and a values object.");
        }
        const name = profile.name.trim();
        const normalizedName = name.toLocaleLowerCase();
        if (names.has(normalizedName)) throw new Error(`The file contains duplicate login names: ${name}.`);
        names.add(normalizedName);
        const values = {};
        Object.keys(loginFieldIds).forEach((field) => {
          if (typeof profile.values[field] !== "string") {
            throw new Error(`The saved login "${name}" has an invalid ${field} value.`);
          }
          values[field] = profile.values[field];
        });
        return { name, values };
      });
    }

    function storeLoginProfiles(profiles) {
      if (!loginStorageAvailable) throw new Error("Browser storage is unavailable. Check browser privacy settings or use another browser profile.");
      const validated = validateLoginProfiles(profiles);
      try {
        localStorage.setItem(loginStorageKey, JSON.stringify(validated));
      } catch (error) {
        if (error instanceof DOMException && (error.name === "QuotaExceededError" || error.name === "NS_ERROR_DOM_QUOTA_REACHED")) {
          throw new Error("There is not enough browser storage to save these logins.");
        }
        throw new Error(`Could not save logins to browser storage: ${error.message}`);
      }
      savedLogins = validated;
      renderSavedLogins();
    }

    function renderSavedLogins() {
      const query = savedLoginSearch.value.trim().toLocaleLowerCase();
      savedLoginList.replaceChildren();
      savedLogins
        .filter((profile) => profile.name.toLocaleLowerCase().includes(query))
        .forEach((profile) => {
          const row = document.createElement("div");
          row.className = "saved-login-item";
          row.setAttribute("role", "listitem");
          const useButton = document.createElement("button");
          useButton.className = "tool-button saved-login-use";
          useButton.type = "button";
          useButton.textContent = profile.name;
          useButton.setAttribute("aria-label", `Use saved login ${profile.name}`);
          useButton.addEventListener("click", () => {
            Object.entries(loginFieldIds).forEach(([field, id]) => {
              document.getElementById(id).value = profile.values[field];
            });
            savedLoginPanel.hidden = true;
            document.getElementById("toggle-saved-logins").setAttribute("aria-expanded", "false");
            loginStatus.textContent = `Loaded login "${profile.name}".`;
          });
          row.append(useButton);
          savedLoginList.append(row);
        });
    }

    function initializeLoginProfiles() {
      try {
        const stored = localStorage.getItem(loginStorageKey);
        if (stored) savedLogins = validateLoginProfiles(JSON.parse(stored));
      } catch (error) {
        loginStorageAvailable = false;
        loginStatus.textContent = `Could not load saved logins: ${error.message}`;
      }
      renderSavedLogins();
    }

    document.getElementById("save-login").addEventListener("click", (event) => {
      saveLoginForm.hidden = false;
      event.currentTarget.setAttribute("aria-expanded", "true");
      loginStatus.textContent = "";
      saveLoginName.focus();
    });
    document.getElementById("cancel-save-login").addEventListener("click", () => {
      saveLoginForm.reset();
      saveLoginForm.hidden = true;
      document.getElementById("save-login").setAttribute("aria-expanded", "false");
    });
    saveLoginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const profileName = saveLoginName.value.trim();
      if (!profileName) {
        loginStatus.textContent = "Enter a non-empty name to save this login.";
        saveLoginName.focus();
        return;
      }
      const duplicate = savedLogins.find((profile) => profile.name.toLocaleLowerCase() === profileName.toLocaleLowerCase());
      const profile = { name: profileName, values: readLoginFields() };
      const updated = savedLogins.filter((item) => item.name.toLocaleLowerCase() !== profileName.toLocaleLowerCase());
      updated.push(profile);
      try {
        storeLoginProfiles(updated);
        loginStatus.textContent = duplicate
          ? `Updated saved login "${duplicate.name}".`
          : `Saved login "${profileName}".`;
        saveLoginForm.reset();
        saveLoginForm.hidden = true;
        document.getElementById("save-login").setAttribute("aria-expanded", "false");
      } catch (error) {
        loginStatus.textContent = error.message;
      }
    });

    function readLoginFields() {
      return Object.fromEntries(Object.entries(loginFieldIds).map(([field, id]) => [
        field,
        document.getElementById(id).value
      ]));
    }

    document.getElementById("toggle-saved-logins").addEventListener("click", (event) => {
      const button = event.currentTarget;
      savedLoginPanel.hidden = !savedLoginPanel.hidden;
      button.setAttribute("aria-expanded", String(!savedLoginPanel.hidden));
      loginStatus.textContent = "";
      if (!savedLoginPanel.hidden) {
        renderSavedLogins();
        savedLoginSearch.focus();
      }
    });
    savedLoginSearch.addEventListener("input", renderSavedLogins);

    document.getElementById("export-logins").addEventListener("click", () => {
      try {
        const content = JSON.stringify({ format: "txtango-login-profiles", version: 1, logins: savedLogins }, null, 2);
        const blob = new Blob([content], { type: "application/json;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "txtango-logins.json";
        document.body.append(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        loginStatus.textContent = `Exported ${savedLogins.length} saved login${savedLogins.length === 1 ? "" : "s"}. Keep the file secure; it contains passwords.`;
      } catch (error) {
        loginStatus.textContent = `Could not export logins: ${error.message}`;
      }
    });

    const importLoginFile = document.getElementById("import-logins-file");
    document.getElementById("import-logins").addEventListener("click", () => importLoginFile.click());
    importLoginFile.addEventListener("change", async () => {
      const file = importLoginFile.files[0];
      if (!file) return;
      try {
        const text = (await file.text()).replace(/^\uFEFF/, "");
        const imported = JSON.parse(text);
        if (!imported || imported.format !== "txtango-login-profiles" || imported.version !== 1) {
          throw new Error("This file is not a supported TxTango login export.");
        }
        const profiles = validateLoginProfiles(imported.logins);
        const conflicts = profiles.filter((profile) =>
          savedLogins.some((existing) => existing.name.toLocaleLowerCase() === profile.name.toLocaleLowerCase())
        );
        const merged = savedLogins.filter((existing) =>
          !profiles.some((profile) => profile.name.toLocaleLowerCase() === existing.name.toLocaleLowerCase())
        ).concat(profiles);
        storeLoginProfiles(merged);
        loginStatus.textContent = `Imported ${profiles.length} saved login${profiles.length === 1 ? "" : "s"}${conflicts.length ? `, replacing ${conflicts.length} existing` : ""}.`;
      } catch (error) {
        loginStatus.textContent = `Could not import logins: ${error.message}`;
      } finally {
        importLoginFile.value = "";
      }
    });

    function suggestionsFor(fieldName) {
      const name = fieldName.toLowerCase();
      if (name === "datetimetype") return ["MINUTES", "HOURS", "DAYS", "GET_ALL", "GET_MODIFIED_SINCE_LAST_REQUEST"];
      if (name === "identifiertype") return ["ID", "TRANSICS_ID", "CODE", "TACHO_CARD_ID"];
      if (/^(include|is|has|use|active|enabled)/i.test(fieldName)) return ["true", "false"];
      if (name === "language") return ["EN", "FR", "NL", "DE"];
      return [];
    }

    function placeholderFor(fieldName) {
      if (/date|time/i.test(fieldName)) return "dateTime";
      if (/^(value|version|systemnr|id)$/i.test(fieldName)) return "int or string";
      if (/^(include|is|has|use|active|enabled)/i.test(fieldName)) return "true or false";
      return "Enter a value";
    }

    function createFieldEditor(xml, container, operationName) {
      validateArguments(xml);
      const parsedDocument = new DOMParser().parseFromString(
        `<argument-fragment xmlns="${xmlNamespace}">${xml}</argument-fragment>`,
        "application/xml"
      );
      const wrapper = parsedDocument.documentElement;
      const fields = [];
      const groupPaths = [];
      container.replaceChildren();
      const roots = Array.from(wrapper.children);

      if (!roots.length) {
        const empty = document.createElement("p");
        empty.className = "field-hint";
        empty.textContent = `No argument fields are defined for ${operationName}. Add the operation's XML arguments in XML mode first.`;
        container.append(empty);
      }

      function renderElement(element, parent, path, nodePath) {
        const fieldName = element.localName || element.nodeName;
        const children = Array.from(element.children);
        if (!children.length) {
          const row = document.createElement("div");
          row.className = "argument-field";
          const label = document.createElement("label");
          label.textContent = path.join(" › ");
          const input = document.createElement("input");
          input.className = "argument-input";
          input.type = "text";
          input.id = `field-${operationName}-${fields.length}`;
          label.htmlFor = input.id;
          input.value = element.textContent.trim();
          input.placeholder = placeholderFor(fieldName);
          input.setAttribute("aria-label", `${path.join(" ")} value`);
          const options = suggestionsFor(fieldName);
          if (options.length) {
            const listId = `suggestions-${operationName}-${fields.length}`;
            const datalist = document.createElement("datalist");
            datalist.id = listId;
            options.forEach((option) => {
              const item = document.createElement("option");
              item.value = option;
              datalist.append(item);
            });
            input.setAttribute("list", listId);
            row.append(label, input, datalist);
          } else {
            row.append(label, input);
          }
          const omitLabel = document.createElement("label");
          omitLabel.className = "omit-field";
          const omit = document.createElement("input");
          omit.type = "checkbox";
          omit.setAttribute("aria-label", `Omit ${path.join(" ")}`);
          omitLabel.append(omit, document.createTextNode("Omit"));
          row.append(omitLabel);
          parent.append(row);
          fields.push({ nodePath, input, omit });
          return;
        }

        groupPaths.push(nodePath);
        const group = document.createElement("fieldset");
        group.className = "field-group";
        const legend = document.createElement("legend");
        legend.textContent = fieldName;
        group.append(legend);
        parent.append(group);
        const occurrences = new Map();
        children.forEach((child, childIndex) => {
          const childName = child.localName || child.nodeName;
          const index = (occurrences.get(childName) || 0) + 1;
          occurrences.set(childName, index);
          const suffix = children.filter((item) => (item.localName || item.nodeName) === childName).length > 1
            ? ` [${index}]`
            : "";
          renderElement(child, group, [...path, `${childName}${suffix}`], [...nodePath, childIndex]);
        });
      }

      const occurrences = new Map();
      roots.forEach((root, rootIndex) => {
        const rootName = root.localName || root.nodeName;
        const index = (occurrences.get(rootName) || 0) + 1;
        occurrences.set(rootName, index);
        const suffix = roots.filter((item) => (item.localName || item.nodeName) === rootName).length > 1
          ? ` [${index}]`
          : "";
        renderElement(root, container, [`${rootName}${suffix}`], [rootIndex]);
      });

      return { wrapper, fields, groupPaths };
    }

    function serializeFieldModel(model) {
      if (!model) return "";
      const wrapper = model.wrapper.cloneNode(true);
      const locate = (nodePath) => {
        let element = wrapper;
        nodePath.forEach((index) => { element = element.children[index]; });
        return element;
      };
      const elements = model.fields.map((field) => ({ ...field, element: locate(field.nodePath) }));
      const groups = model.groupPaths
        .slice()
        .sort((left, right) => right.length - left.length)
        .map(locate);
      elements.filter(({ omit }) => !omit.checked).forEach(({ element, input }) => {
        element.textContent = input.value;
      });
      elements.filter(({ omit }) => omit.checked).forEach(({ element }) => element.remove());
      groups.forEach((element) => {
        if (element.parentNode !== wrapper && !element.children.length && !element.textContent.trim()) element.remove();
      });

      return Array.from(wrapper.childNodes)
        .filter((node) => node.nodeType === Node.ELEMENT_NODE)
        .map((node) => new XMLSerializer().serializeToString(node))
        .join("");
    }

    function validateArguments(xml) {
      if (/<!DOCTYPE|<\?xml/i.test(xml)) throw new Error("Enter only operation argument elements, without a DOCTYPE or XML declaration.");
      const wrapped = new DOMParser().parseFromString(`<argument-fragment xmlns="${xmlNamespace}">${xml}</argument-fragment>`, "application/xml");
      if (wrapped.querySelector("parsererror")) throw new Error("Operation arguments are not well-formed XML.");
    }

    function buildEnvelope(name, login, argumentXml) {
      //if field is empty, it will be omitted from the login block
      const loginXml = Object.entries(login)
        .filter(([key, value]) => value.trim()) // Only include non-empty values
        .map(([key, value]) => `<${key}>${escapeXml(value)}</${key}>`)
        .join("");
      return `<?xml version="1.0" encoding="utf-8"?>` +
        `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ` +
        `xmlns:xsd="http://www.w3.org/2001/XMLSchema" ` +
        `xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">` +
        `<soap:Body><${name} xmlns="${xmlNamespace}"><Login>${loginXml}</Login>${argumentXml}</${name}></soap:Body></soap:Envelope>`;
    }

    function formatXml(xml) {
      const document = new DOMParser().parseFromString(xml, "application/xml");
      if (document.querySelector("parsererror")) return xml;

      function indentElements(element, depth) {
        const children = Array.from(element.childNodes);
        const elements = children.filter((node) => node.nodeType === Node.ELEMENT_NODE);
        const hasOnlyWhitespaceText = children
          .filter((node) => node.nodeType === Node.TEXT_NODE)
          .every((node) => !node.textContent.trim());
        if (!elements.length || !hasOnlyWhitespaceText) return;

        elements.forEach((child) => indentElements(child, depth + 1));
        const contentNodes = children.filter((node) => node.nodeType !== Node.TEXT_NODE);
        while (element.firstChild) element.removeChild(element.firstChild);
        contentNodes.forEach((child) => {
          element.appendChild(document.createTextNode(`\n${"  ".repeat(depth + 1)}`));
          element.appendChild(child);
        });
        element.appendChild(document.createTextNode(`\n${"  ".repeat(depth)}`));
      }

      indentElements(document.documentElement, 0);
      return new XMLSerializer().serializeToString(document);
    }

    function csvCell(value) {
      const safeValue = /^[\s]*[=+\-@]/.test(value) ? `'${value}` : value;
      return `"${safeValue.replace(/"/g, '""')}"`;
    }

    function xmlToCsv(xml) {
      const parsed = new DOMParser().parseFromString(xml, "application/xml");
      if (parsed.querySelector("parsererror")) {
        return `response\r\n${csvCell(xml)}`;
      }

      let root = parsed.documentElement;
      if (root.localName === "Envelope" && root.namespaceURI === "http://schemas.xmlsoap.org/soap/envelope/") {
        const body = root.getElementsByTagNameNS("http://schemas.xmlsoap.org/soap/envelope/", "Body")[0];
        root = body ? body.firstElementChild || body : root;
      }

      function collectRepeatedRows(node) {
        const groups = new Map();
        Array.from(node.children).forEach((child) => {
          const key = child.localName || child.nodeName;
          if (!groups.has(key)) groups.set(key, []);
          groups.get(key).push(child);
        });
        const rows = Array.from(groups.values()).filter((items) => items.length > 1).flatMap((items) => items);
        if (rows.length) return rows;

        for (const child of Array.from(node.children)) {
          const nested = collectRepeatedRows(child);
          if (nested.length) return nested;
        }
        return [];
      }

      const rows = collectRepeatedRows(root);
      const tableRows = rows.length ? rows : [root];

      function flatten(element, prefix, record) {
        Array.from(element.attributes).forEach((attribute) => {
          if (attribute.name.startsWith("xmlns")) return;
          const key = `${prefix ? `${prefix}.` : ""}@${attribute.localName}`;
          record[key] = attribute.value;
        });

        const childElements = Array.from(element.children);
        if (!childElements.length) {
          const key = prefix || element.localName || "value";
          record[key] = element.textContent.trim();
          return;
        }

        childElements.forEach((child) => {
          const key = prefix ? `${prefix}.${child.localName}` : child.localName;
          if (child.childElementCount === 0) {
            record[key] = child.textContent.trim();
          } else {
            flatten(child, key, record);
          }
        });
      }

      const records = tableRows.map((row) => {
        const record = {};
        flatten(row, "", record);
        return record;
      }).filter((record) => Object.keys(record).length > 0);

      if (!records.length) return `response\r\n${csvCell(xml)}`;

      const columns = [...new Set(records.flatMap((record) => Object.keys(record)))];
      return [
        columns.map(csvCell).join(","),
        ...records.map((record) => columns.map((column) => csvCell(record[column] || "")).join(","))
      ].join("\r\n");
    }

    function downloadFile(filename, content, type) {
      const blob = new Blob(["\uFEFF", content], { type });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    async function sendRequest(name, argumentsXml, button, status, response, responseStatus, responseContent) {
      response.hidden = true;
      responseContent.textContent = "";
      responseContent.dataset.raw = "";
      try {
        const login = readLogin();
        argumentsXml = argumentsXml.trim();
        validateArguments(argumentsXml);
        const envelope = buildEnvelope(name, login, argumentsXml);
        const proxyUrlValue = document.getElementById("proxy-url").value.trim();
        let requestUrl = serviceUrl;
        if (proxyUrlValue) {
          const proxyUrl = new URL(proxyUrlValue);
          if (proxyUrl.protocol !== "https:" || proxyUrl.username || proxyUrl.password) {
            throw new Error("The Cloudflare Worker URL must use HTTPS and must not contain credentials.");
          }
          requestUrl = proxyUrl.href.replace(/\/+$/, "");
        }
        button.disabled = true;
        status.textContent = "Sending…";
        const result = await fetch(requestUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/xml; charset=utf-8",
            "SOAPAction": `"${xmlNamespace}/${name}"`
          },
          body: envelope
        });
        const responseText = await result.text();
        response.hidden = false;
        responseStatus.textContent = `HTTP ${result.status} ${result.statusText}`;
        responseContent.dataset.raw = responseText;
        responseContent.textContent = responseText ? formatXml(responseText) : "(empty response)";
        status.textContent = result.ok ? "Request complete." : "Service returned an error status.";
      } catch (error) {
        status.textContent = error instanceof TypeError
          ? "Request failed; check the network and verify the Cloudflare Worker URL and allowed Pages origin."
          : error.message;
      } finally {
        button.disabled = false;
      }
    }

    renderOperations();
    filterOperations();
    initializeLoginProfiles();
    search.addEventListener("input", filterOperations);
    document.getElementById("expand-all").addEventListener("click", () => {
      document.querySelectorAll("#operations .operation, #bookmarked-operations .operation")
        .forEach((item) => { item.open = true; });
    });
    document.getElementById("collapse-all").addEventListener("click", () => {
      document.querySelectorAll("#operations .operation, #bookmarked-operations .operation")
        .forEach((item) => { item.open = false; });
    });