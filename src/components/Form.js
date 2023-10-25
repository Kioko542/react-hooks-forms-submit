import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      firstName: firstName,
      lastName: lastName,
    };

    setSubmittedData([...submittedData, formData]);

    setFirstName("");
    setLastName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>

      <h3>Submissions</h3>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>
            {data.firstName} {data.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
