import AddCompany from "./AddRelatedEntity";
import { useState } from "react";

function RelatedEntity() {
  const [contactPeople, setContactPeople] = useState([]);

  const handleAddContactPerson = () => {
    setContactPeople([...contactPeople, <AddCompany key={Date.now()} />]);
  };

  const handleRemoveContactPerson = (id) => {
    const updatedContactPeople = contactPeople.filter(
      (contactPerson) => contactPerson.key !== id
    );
    setContactPeople(updatedContactPeople);
  };

  return (
    <div className="related-container">
      <h4>Related Entity</h4>
      {contactPeople.map((contactPerson) => (
        <AddCompany
          key={contactPerson.key}
          id={contactPerson.key}
          onRemove={() => handleRemoveContactPerson(contactPerson.key)}
        />
      ))}
      <p className="add-btn" onClick={handleAddContactPerson}>
        + Add Related Entity
      </p>
    </div>
  );
}

export default RelatedEntity;
