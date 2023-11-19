import React from 'react'

function Textbox(props) {
  var inputElement = document.getElementById("text");

//   // Get the value of the input field
var inputValue = inputElement.value;
// console.log(inputValue)
  return (
    <div style={{display:"flex",alignItems:"center",marginBottom:"10px"}}>
         <input style={{width: "500px", padding:"5px",marginBottom: "0.5rem"}} id="text" type="text" name="name" placeholder={props.text} defaultValue={Which planet is closest to Sun?}/>
    </div>
  )
}

export default Textbox