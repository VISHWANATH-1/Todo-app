import React from 'react'
import './Note.css'
import dele from '../Pct/delete.png'

let timer=500, timeout
function Note (p) {

  const formatDate = (value) => {
    if(!value) return "";
  
    const date = new Date(value);
    const monthNames=[
       'Jan','Feb','Mar','Apr','May','Jun',
       'Jul','Aug','Sep','Oct','Nov','Dec'
     ]

     let hrs=date.getHours();
     let amPm=hrs>12?"PM":"AM";
     hrs=hrs?hrs:"12";
     hrs=hrs>12?hrs=24-hrs:hrs;
     let min = date.getMinutes();
     min=min<10?"0"+min:min;
     let day = date.getDate();
     const month=monthNames[date.getMonth()]

     return`${hrs}:${min}:${amPm}:${day}:${month}`
};
    const debounce=(func)=>{
      clearTimeout(timeout)
      timeout=setTimeout(func, timer);
    }

    const updateText= (text,id)=>{
      debounce(()=>p.updateText(text,id))
    }
 
  return (
    <div className='Note' style={{backgroundColor:p.note.color}} >
    <textarea className="note-text" defaultValue={p.note.text} 
      onChange ={(event)=>updateText(event.target.value,p.note.id)}
    />
    <div className="note_foot">
    <p>{formatDate(p.note.time)}</p>
    <img src={dele} alt="" onClick={()=>p.deleteNote(p.note.id)} />
    </div>
    
    </div>
  )
}

export default Note