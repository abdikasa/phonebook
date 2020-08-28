import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  console.log(notes);
  notes.forEach((element) => {
    console.log(element.id, element);
  });

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target, event, event.type);
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
        <input></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
