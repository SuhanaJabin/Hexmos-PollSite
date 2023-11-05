import React from 'react'

function Input(props) {
  return (
    <div>
         <input type="radio" id="checkbox1" name="Sports" />
        <label for="checkbox1">{props.text}</label><br />
    </div>
  )
}

export default Input