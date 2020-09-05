import React, { useState, useEffect } from "react";
import AddForm from "./components/AddForm";
import Filter from "./components/Filter";
import Friends from "./components/Friends";
import axios from "axios";
import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [filterValue, setFilter] = useState("");

  const hook = () => {
    personService.getData().then((res) => setPersons(res.data));
  };

  useEffect(hook, []);

  const filterFriends =
    filterValue.trim() === ""
      ? persons
      : persons.filter((person) => person.name.includes(filterValue));

  const addName = (event) => {
    event.preventDefault();
    const allFriends = [...persons];
    const checkIfAExists = () => {
      return allFriends.every((person) => {
        return person.name !== newName;
      });
    };

    if (!checkIfAExists()) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newFriend = { name: newName, phone: newPhone };

    personService.addPerson(newFriend).then((res) => {
      setPersons(allFriends.concat(res.data));
      setNewName("");
      setPhone("");
    });
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
