import React,{useState} from 'react'
import pl from "../Pct/Pl.png"
import './Side.css'

function Side(p) {
  const color=["#fe9b72","#fec972","#00d4fe","#b693fd","#e4ce91" ]
  const[listO,setListO]=useState(false)
  return (
<div className='Sidebar'>
  <img src={pl} alt="" onClick={()=>setListO(!listO)} />
  <br />
  <br />
  <div className={`side-list ${listO?"side-list-act":""} `}>
  {
  color.map((item,index)=> ( <li key={index} className="side-list-item"
   style={{backgroundColor:item}} 
   onClick={()=>p.addNote(item)}
   />
   ))}
  </div>
  </div>
  )
}

export default Side