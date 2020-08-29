import React, { useState } from "react";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456" },
    { name: "Ada Lovelace", phone: "39-44-5323523" },
    { name: "Dan Abramov", phone: "12-43-234345" },
    { name: "Mary Poppendieck", phone: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");
  //create a variable state for the new input.
  const [filterValue, setFilter] = useState("");

  //use the persons variable, return all or just the filtered names
  const filterFriends =
    filterValue.trim() === ""
      ? persons
      : persons.filter((person) => person.name.includes(filterValue));

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
    setPersons(allFriends.concat(newFriend));
    setNewName("");
    setPhone("");
  };

  const inputName = (event) => {
    setNewName(event.target.value);
  };

  //update the filterFriends after each input change.
  const filterName = (event) => {
    setFilter(event.target.value);
  };

  const inputPhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterValue} onChange={filterName}></Filter>
      <h2>add a new</h2>
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
        {filterFriends.map((person, id) => {
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
