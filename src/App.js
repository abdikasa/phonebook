import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note");
  console.log(notes);
  notes.forEach((element) => {
    console.log(element.id, element);
  });

  const addNote = (event) => {
    event.preventDefault();
    let allNotes = [...notes];
    allNotes.push({ id: notes.length + 1, content: newNote });
    setNotes(allNotes);
  };

  //   In order to enable editing of the input element, we have to register an event handler that synchronizes the changes made to the input with the component's state:

  const handleEvent = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleEvent}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
