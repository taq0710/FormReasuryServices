import { useState } from "react";
import AddContactPerson from "./AddContactPerson";
import "./style.css";

function CustomerInformation() {
  const [achcompanyName, setAchCompanyName] = useState("ACCONCRETEL");
  const [wirecompanyName, setWireCompanyName] = useState("ACCONCRETELLC");
  const [contactPeople, setContactPeople] = useState([]);
  const handleAddContactPerson = () => {
    setContactPeople([...contactPeople, <AddContactPerson />]);
  };

  const handleachCompanyNameChange = (event) => {
    setAchCompanyName(event.target.value);
  };
  const handlewireCompanyNameChange = (event) => {
    setWireCompanyName(event.target.value);
  };
  return (
    <div className="customer-info">
      <h4>Customer Information</h4>
      <div>
        <div className="header-info">
          <div className="header-info_item">
            <strong>A&C Total Construction Services LLC</strong>
            <div>Tax ID: 97-31604 | CIF: AQA9786</div>
            <div>1512 Main Street, Sulte 3000</div>
            <div>Atlanta, GA 142111</div>
            <div>Entity Type: LLC</div>
          </div>
          <div className="header-info_item">
            <strong>Contact</strong>
            <div>Account Officer: Janet Harlowe</div>
            <div>Phone: (321) 098-7654</div>
            <div>Email: jaharlowe@acconstruction.com</div>
          </div>
        </div>
        <div className="add-contact">
          <AddContactPerson />
          {contactPeople}
          <p className="add-btn" onClick={handleAddContactPerson}>
            + Add Secondary Contact person
          </p>
        </div>
        <div className="company-name">
          <div>
            <label>ACH Company Name </label>
            <div>
              <input
                type="text"
                name="name"
                value={achcompanyName}
                onChange={handleachCompanyNameChange}
              />
            </div>
          </div>
          <div>
            <label>Wire Company Name</label>
            <div>
              <input
                type="text"
                name="name"
                value={wirecompanyName}
                onChange={handlewireCompanyNameChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation;
