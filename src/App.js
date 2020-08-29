import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "4561231456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const allFriends = [...persons];
    const checkIfExists = () => {
      return allFriends.every((person) => {
        return person.name !== newName;
      });
    };

    if (!checkIfExists()) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newFriend = { name: newName, phone: newPhone };
    console.log(newFriend);
    setPersons(allFriends.concat(newFriend));
    setNewName("");
    setPhone("");
  };

  const inputName = (event) => {
    setNewName(event.target.value);
  };

  const inputPhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={inputName} value={newName} />
        </div>
        <div>
          phone: <input onChange={inputPhone} value={newPhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, id) => {
          return (
            <li key={id}>
              {person.name}: {person.phone}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
