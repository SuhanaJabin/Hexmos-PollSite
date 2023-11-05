import React from "react";
import{useState} from "react";
import {useNavigate} from "react-router-dom"

function FilterBtn() {
  const navigate = useNavigate(); 
  const array={}
  const[isChecked,setIsChecked]=useState([false,false,false,false]); // array named array created with false as the input elements.
  const handleOnChange=(index)=>{
    const newCheckedState=[...isChecked];
    newCheckedState[index]= !newCheckedState[index];

    setIsChecked(newCheckedState);
  }
 
  return (
    <>
    <div style={{backgroundColor:"rgb(212, 208, 208",boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",height:"200px"}}>
    <div style={{padding:"1rem",}}>
      
      <input type="checkbox" checked={isChecked[0]} o onChange={() => handleOnChange(0)} id="checkbox1" name="Sports" />
      <label for="checkbox1">Sports</label>
      <br />

      <input type="checkbox" checked={isChecked[1]}  onChange={() => handleOnChange(1)} id="checkbox2" name="Games" />
      <label for="checkbox2">Games</label>
      <br />

      <input type="checkbox" checked={isChecked[2]}  onChange={() => handleOnChange(2)} id="checkbox3" name="Health" />
      <label for="checkbox3">Health</label>
      <br />

      <input type="checkbox" checked={isChecked[3]}  onChange={() => handleOnChange(3)} id="checkbox4" name="Politics" />
      <label for="checkbox4">Politics</label>
     
    </div>
    <div style={{padding:"1rem"}}>
    <button >Filter by tags</button>
    </div>
    </div>
    </>
  );
}

export default FilterBtn;
