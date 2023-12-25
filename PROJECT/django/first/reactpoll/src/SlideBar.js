import React from "react";
import CreatePollBtn from "./CreatePollBtn";
import FilterBtn from "./FilterBtn";
import { useState } from "react";

//CreatePollBtn & FilterComp
function SlideBar() {
  const[stateValue,setStateValue]=useState("Slidebar text");
  
  const updateState = (newValue) =>{
    setStateValue(newValue);
  }
  

  return (
    <>
  
     <div className="">
     
     <CreatePollBtn />
     <FilterBtn updateState={updateState}/>
 
   

     </div>


    </>
  );
}

export default SlideBar;
