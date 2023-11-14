import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FilterBtn({ data2 }) {
  const [TagsArray, setTagsArray] = useState([]);
  const [SelTags, setSelTags] = useState([]); 
  const [isChecked, setIsChecked] = useState([false, false, false, false, false, false]);
  const navigate = useNavigate();

  if (!data2 || data2.length === 0) {
    return <div>No data available</div>;
  }


  const Tags = ["feeling", "mentalhealth", "casual", "games", "sports", "politics"];
 const print=()=>{
  console.log("Tags for filtering:-");
  {SelTags.map((tag,index)=>(
   console.log({tag})
   
  ))}
  const nonEmptyTags = SelTags.filter(tag => tag && tag.trim() !== "");

  const mystring = nonEmptyTags.join(",");
  console.log(mystring)
  const url=`http://127.0.0.1:8000/polls/pollstag/?tags=${encodeURIComponent(mystring)}`;
  navigate(url);

 }

  const handleOnChange = (index) => {
    const newCheckedState = [...isChecked];
    newCheckedState[index] = !newCheckedState[index];
    setIsChecked(newCheckedState);
  
   let i;

    if (newCheckedState[index]) {
      setTagsArray((prevTagsArray) => [...prevTagsArray, Tags[index]]);
      console.log("done")
      SelTags[index]=Tags[index];
      console.log("This is the selected tag",SelTags[index]);
     
    

    } else {
      setTagsArray((prevTagsArray) => prevTagsArray.filter((tag) => tag !== Tags[index]));
    }
  
  };


  return (
    <>
      <div style={{  backgroundColor: "rgb(212, 208, 208)", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)", height: "200px" }}>
        <div style={{ padding: "1rem" }}>
          {data2["Tags"].map((tag, index) => (
            <div key={index}>
              <input type='checkbox' checked={isChecked[index]} onChange={() => handleOnChange(index)} name={tag}></input>
              <label htmlFor={`checkbox${index}`}>{tag}</label>

              <br />
            </div>
          ))}
        </div>
        <div style={{ padding: "1rem" }}>
          <button onClick={() => print()}>Filter by tags</button>
        </div>
        {/* <div>
        {SelTags.map((tag,index)=>(
      <p key={index}>{tag}</p>
     
    ))}
        </div> */}
      </div>
    </>
  );
}

export default FilterBtn;
