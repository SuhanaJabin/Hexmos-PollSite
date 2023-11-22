import React from 'react'

function Textbox() {
//   var inputElement = document.getElementById("text");

// //   // Get the value of the input field
// var inputValue = inputElement.value;
// console.log(inputValue)
  return (
    <div style={{display:"flex",alignItems:"center",marginBottom:"10px"}}>
         <input style={{width: "500px", padding:"5px",marginBottom: "0.5rem"}} id="text" type="text" name="name"  />
    </div>
  )
  
}

export default Textbox