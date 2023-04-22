import "./style.css";
import { useState } from "react";
function AddContactPerson() {
  const [firstName, setFirstName] = useState("Robert");
  const [lastName, setLastName] = useState("Robert");
  const [phone, setPhone] = useState("(123)1321231");
  const [phoneCell, setPhoneCell] = useState("(123)1321231");
  const [email, setEmail] = useState("abc@acconstruction.com");
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handlePhoneCellChange = (event) => {
    setPhoneCell(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="addcontact-container">
      <div className="addcontact-item">
        <label>TO Primary Contact Person(optional)</label>
        <div>
          <input
            type="text"
            name="firstname"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <input
            type="text"
            name="lastname"
            value={lastName}
            onChange={handleLastnameChange}
          />
        </div>
      </div>
      <div className="addcontact-phone">
        <div>
          <label>Phone Number</label>
          <div>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <div>
          <label>Phone Number(cell)</label>
          <div>
            <input
              type="text"
              name="phone"
              value={phoneCell}
              onChange={handlePhoneCellChange}
            />
          </div>
        </div>
      </div>
      <div className="addcontact-email">
        <label>Email</label>
        <div>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>
    </div>
  );
}

export default AddContactPerson;
