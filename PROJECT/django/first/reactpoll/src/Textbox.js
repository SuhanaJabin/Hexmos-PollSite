import React from 'react'

function Textbox(props) {
  return (
    <div style={{display:"flex",alignItems:"center",marginBottom:"10px"}}>
         <input style={{width: "500px", padding:"5px",marginBottom: "0.5rem"}}  type="text" name="name" value={props.text}/>
    </div>
  )
}

export default Textbox