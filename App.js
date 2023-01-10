import React from "react";
import Notes from "./Components/Notes";
import classes from "./app.module.css";
import Modal from "./Components/EditModal";

import { useState } from "react";

export const AppContext = React.createContext();

export function App() {
  const [editing, setEditing] = useState(false);
  const [noteList, setNoteList] = useState([
    { id: "1", text: "first note" },
    { id: "2", text: "second note" },
    { id: "3", text: "Third note" },
  ]);

  const addNoteData = (formData) => {
    console.log(formData);
    setNoteList((prevList) => {
      return [...prevList, { id: Math.random(), text: formData }];
    });
  };

  const removeNote = (id) => {
    setNoteList(
      noteList.filter((el) => {
        return el.id !== id;
      })
    );
  };

  const editNote = (id) => {};

  return (
    <AppContext.Provider
      value={{
        noteList,
        setNoteList,
        addNoteData,
        removeNote,
        editing,
        setEditing,
      }}
    >
      <React.Fragment>
        <Notes className={classes} />
        {editing && <Modal />}
      </React.Fragment>
    </AppContext.Provider>
  );
}

export default App;
