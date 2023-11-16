import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

function FilterBtn({ data2 }) {
  const [TagsArray, setTagsArray] = useState([]);
  const [SelTags, setSelTags] = useState([]); 
  const [isChecked, setIsChecked] = useState([false, false, false, false, false, false]);
  const Tags = ["feeling", "mentalhealth", "casual", "games", "sports", "politics"];
  // const data =`http://localhost:8000/polls/get-polls-data/`;
  const [tag, setTag] = useState(null);
  const [shouldRunEffect, setShouldRunEffect] = useState(false);
  const navigate = useNavigate();
  const prevNonEmptyTagsRef = useRef([]);

  let nonEmptyTags = SelTags.filter(tag => tag && tag.trim() !== "");
  let mystring = nonEmptyTags.join(",");

  useEffect(() => {
    const prevNonEmptyTags = prevNonEmptyTagsRef.current;

    if (shouldRunEffect && prevNonEmptyTags !== nonEmptyTags && nonEmptyTags.length > 0) {
      const url = `http://127.0.0.1:8000/polls/pollstag/?tags=${encodeURIComponent(mystring)}`;

      const myData = async () => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const json = await response.json();
            setTag(json);
          } else {
            console.error("Request failed");
          }
        } catch (error) {
          console.error("Error", error);
        }
      };

      myData();
      prevNonEmptyTagsRef.current = nonEmptyTags;
      setShouldRunEffect(false); // Reset the flag after running the effect
    }
  }, [shouldRunEffect, nonEmptyTags]);

  const print = () => {
    console.log("Tags for filtering:-");
    SelTags.forEach((tag, index) => {
      console.log(tag);
    });

    // Set the flag to true to trigger the useEffect on the next render
    setShouldRunEffect(true);
  };

  const handleOnChange = (index) => {
    const newCheckedState = [...isChecked];
    newCheckedState[index] = !newCheckedState[index];
    setIsChecked(newCheckedState);

    if (newCheckedState[index]) {
      setTagsArray((prevTagsArray) => [...prevTagsArray, Tags[index]]);
      setSelTags((prevSelTags) => [...prevSelTags, Tags[index]]);
    } else {
      setTagsArray((prevTagsArray) => prevTagsArray.filter((tag) => tag !== Tags[index]));
      setSelTags((prevSelTags) => prevSelTags.filter((tag) => tag !== Tags[index]));
    }
  };

  if (!data2 || data2.length === 0) {
    return <div>No data available</div>;
  }


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
      <Table data={tag} />
    </>
  );
}

export default FilterBtn;
