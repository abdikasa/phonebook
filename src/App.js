import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

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

    const newFriend = { name: newName };
    console.log(newFriend);
    setPersons(allFriends.concat(newFriend));
    setNewName("");
  };

  const inputName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={inputName} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, id) => {
          return <li key={id}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
