import React from 'react'
import FilterBtn from './FilterBtn'
import { useNavigate } from 'react-router-dom'


function CreatePollBtn() {
  const navigate = useNavigate();
  const navigation= () =>
  {
    navigate('CreatePoll');
  }
  return (
    <div  style={{marginBottom:"1rem",padding:"1rem",width:"100%"}}>
        <button onClick={() => navigation()} style={{backgroundColor:" rgb(0, 183, 255)",color:"white",padding:"1rem",fontWeight:"bold"}}>Create Poll</button>
   
      </div>
  )
}

export default CreatePollBtn