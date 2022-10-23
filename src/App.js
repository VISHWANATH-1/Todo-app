import React, { useEffect, useState } from "react";
import "./Todo/Todo.css";
import Notec from "./Todo/Notec/Notec";
import Side from "./Todo/Side/Side";

function App() {
  const [note, setNote] = 
useState(JSON.parse(localStorage.getItem('note'))|| [] );
  const addNote = (color) => {
    const tempNote = [...note];
    tempNote.push({
      id: Date.now + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNote(tempNote);
  };


  const deleteNote=(id)=>{
    const tempNote=[...note]
    const index = tempNote.findIndex (item=>item.id===id)
    if (index < 0) return;
    tempNote.splice(index,1);
    setNote(tempNote);
  }

  const updateText = (text,id)=>{
    const tempNote=[...note]
    const index = tempNote.findIndex (item=>item.id===id)
    if (index < 0) return;
    tempNote[index].text=text;
    setNote(tempNote);
  }


useEffect(()=>{
   localStorage.setItem("note", JSON.stringify(note))
},[note])

  return (
    <div className="App">
      <Side addNote={addNote} />
      <Notec Note={note} 
             deleteNote={deleteNote}
             updateText={updateText}
      />
    </div>
  );
}

export default App;
