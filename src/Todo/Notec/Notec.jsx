import React from 'react'
import Note from '../Note/Note'
import "./Notec.css"
function Notec(p) {

  const reverArray=(arr)=> { 
  const array=[];
  for (let i = arr.length - 1; i >=0; --i) {
    array.push(arr[i]);

  }
  return array;
  };
  const note = reverArray(p.Note);
  return (
    <div className='Notec'>
      <h2> Notes </h2>
      <div className="Notec-notes">
        { note?.length>0 ?
          note.map((item)=>
        
      <Note
        key={item.id}
        note={item}
        deleteNote={p.deleteNote}
        updateText={p.updateText}
      />): <h3>No Notes Present</h3>
    }
     </div>
    </div>
  )
}

export default  Notec