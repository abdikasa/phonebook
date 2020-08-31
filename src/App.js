import React, { useState } from "react";
import AddForm from "./components/AddForm";
import Filter from "./components/Filter";
import Friends from "./components/Friends";
import axios from "axios";

const promise = axios.get("http://localhost:3001/");
console.log(promise);

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456" },
    { name: "Ada Lovelace", phone: "39-44-5323523" },
    { name: "Dan Abramov", phone: "12-43-234345" },
    { name: "Mary Poppendieck", phone: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [filterValue, setFilter] = useState("");

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} filterValue={filterValue}></Filter>
      <h2>add a new</h2>
      <AddForm
        addName={addName}
        setNewName={setNewName}
        setPhone={setPhone}
        newName={newName}
        newPhone={newPhone}
      ></AddForm>
      <h2>Numbers</h2>
      <Friends filterFriends={filterFriends}></Friends>
    </div>
  );
};

export default App;
