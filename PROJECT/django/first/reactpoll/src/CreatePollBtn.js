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
    <div className='ml-3' style={{marginBottom:"1rem",padding:"1rem",width:"100%"}}>
        <button className='p-6 text-xl rounded-md ' onClick={() => navigation()} style={{backgroundColor:" rgb(0, 183, 255)",color:"white",fontWeight:"bold"}}>Create Poll</button>
   
      </div>
  )
}

export default CreatePollBtn