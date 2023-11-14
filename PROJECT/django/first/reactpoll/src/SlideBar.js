import React from "react";
import CreatePollBtn from "./CreatePollBtn";
import FilterBtn from "./FilterBtn";

//CreatePollBtn & FilterComp
function SlideBar({data2}) {
  console.log("This is the data in Slidebar: ",data2);
  return (
    <>
  
     <div style={{display:"flex", flexDirection:"column",marginRight:"2rem"}}>
     
     <CreatePollBtn />
     <FilterBtn data2={data2}/>
 
   

     </div>


    </>
  );
}

export default SlideBar;
