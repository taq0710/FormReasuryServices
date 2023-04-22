import { useState } from "react";
import "./style.css";
function AddRelatedEntity(props) {
  const [companyName, setCompanyName] = useState("A&B Concrete Service, LLC");
  const [CIFNumber, setCIFNumber] = useState("AQ23123123");
  const [taxId, setTaxId] = useState("97-834192312");
  const [ACHCompanyName, setACHCompanyName] = useState(
    "A&B Concrete Service, LLC"
  );
  const [WireCompanyName, setWireCompanyName] = useState(
    "A&B Concrete Service, LLC"
  );
  const handlecompanynameChange = (event) => {
    setCompanyName(event.target.value);
  };
  const handleCIFNumberChange = (event) => {
    setCIFNumber(event.target.value);
  };
  const handleTaxIDChange = (event) => {
    setTaxId(event.target.value);
  };
  const handleACHChange = (event) => {
    setACHCompanyName(event.target.value);
  };
  const handleWireChange = (event) => {
    setWireCompanyName(event.target.value);
  };

  return (
    <div className="addrelated-container">
      <div className="addrelated-container-item">
        <label>Company Name</label>
        <div>
          <input
            type="text"
            name="companyname"
            value={companyName}
            onChange={handlecompanynameChange}
          />
        </div>
      </div>
      <div className="addrelated-container-item">
        <label>CIF Number</label>
        <div>
          <input
            className="cif-number"
            type="text"
            name="CIFNumber"
            value={CIFNumber}
            onChange={handleCIFNumberChange}
          />
        </div>
      </div>
      <div className="addrelated-container-item">
        <label>Tax ID</label>
        <div>
          <input
            className="tax-id"
            type="text"
            name="taxid"
            value={taxId}
            onChange={handleTaxIDChange}
          />
        </div>
      </div>
      <div className="select-contaner">
        <label>Entity Type</label>
        <div>
          <select className="select">
            <option value="1">LLC</option>
            <option value="1"></option>
            <option value="1"></option>
          </select>
        </div>
      </div>
      <div className="addrelated-container-item">
        <label>ACH Company Name</label>
        <div>
          <input
            className="company-name"
            type="text"
            name="companyname"
            value={ACHCompanyName}
            onChange={handleACHChange}
          />
        </div>
      </div>
      <div className="addrelated-container-item">
        <label>Wire Company Name</label>
        <div>
          <input
            className="company-name"
            type="text"
            name="companyname"
            value={WireCompanyName}
            onChange={handleWireChange}
          />
        </div>
      </div>
      <p className="add-btn" onClick={props.onRemove}>
        Delete
      </p>
    </div>
  );
}

export default AddRelatedEntity;
