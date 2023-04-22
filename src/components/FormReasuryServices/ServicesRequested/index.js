import AHCCheckbox from "./ACHCheckbox";
import ACHCheckboxBlocks from "./ACHCheckboxBlocks";
import ACHCheckboxReporting from "./ACHCheckboxReporting";
import Table from "./TableServicesRequested";

function ServiceRequested() {
  return (
    <div>
      <h4>Services Requested</h4>
      <AHCCheckbox />
      <Table />
      <ACHCheckboxBlocks />
      <ACHCheckboxReporting />
    </div>
  );
}

export default ServiceRequested;
