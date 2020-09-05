import React from "react";

const AddForm = (props) => {
  const inputName = (event) => {
    props.setNewName(event.target.value);
  };

  const inputPhone = (event) => {
    props.setPhone(event.target.value);
  };

  return (
    <form onSubmit={props.addName}>
      <div>
        name: <input onChange={inputName} value={props.newName} />
      </div>
      <div>
        phone: <input onChange={inputPhone} value={props.newPhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddForm;
