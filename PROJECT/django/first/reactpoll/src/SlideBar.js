import React from "react";
import CreatePollBtn from "./CreatePollBtn";
import FilterBtn from "./FilterBtn";

//CreatePollBtn & FilterComp
function SlideBar() {
  return (
    <>
     <div style={{display:"flex", flexDirection:"column",marginLeft:"2rem"}}>
     <CreatePollBtn />
      <FilterBtn />

     </div>
    </>
  );
}

export default SlideBar;
