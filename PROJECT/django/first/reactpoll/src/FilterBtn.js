import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./Table";
import FetchData from "./FetchData";
import Home from "./pages/Home";

function FilterBtn() {
  const [TagsArray, setTagsArray] = useState([]);
  const [SelTags, setSelTags] = useState([]); 
  const [value, setValue] = useState(1);
  const [pollsdata, setPollsData] = useState(null);
  const [isChecked, setIsChecked] = useState([false, false, false, false, false, false]);
  const Tags = ["feeling", "mental health", "casual", "games", "sports", "politics"];
  const [tag, setTag] = useState(null);
  const [shouldRunEffect, setShouldRunEffect] = useState(false);
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [number, setNumber] = useState("");
  const [votes, setVotes] = useState("");
  const [data2, setData2] = useState([]);
  const prevNonEmptyTagsRef = useRef([]);
  let pid;

  let nonEmptyTags = SelTags.filter(tag => tag && tag.trim() !== "");
  let mystring = nonEmptyTags.join(",");
  console.log("Value is ", value);

  useEffect(() => {
    if (value === 1) {
      const pollsdataurl = `http://localhost:8000/polls/get-polls-data/`;

      const fetchData = async () => {
        try {
          const response = await fetch(pollsdataurl);
      
          if (response.ok) {
            const json = await response.json();
            console.log("This is the pollsdata json: ", json)
            const columns = Object.keys(json[0]);
            setPollsData(json);
            setValue(1);
  
            if (json && json.length > 0) {
              setQuestion(json[0].Question); // Set the initial question
            }
            if (json && json.length > 0) {
              setNumber(json[0].Number); // Set the initial question
            }
            if (json && json.length > 0) {
              setVotes(json[0].TotalVotes); // Set the initial question
            }
          } else {
            console.error('Request failed with status:', response.status);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      fetchData();
    }
  }, [value]);

  useEffect(() => {
    const prevNonEmptyTags = prevNonEmptyTagsRef.current;

    if (value === 2 && shouldRunEffect && prevNonEmptyTags !== nonEmptyTags && nonEmptyTags.length > 0) {
      const url = `http://127.0.0.1:8000/polls/pollstag/?tags=${encodeURIComponent(mystring)}`;

      const myData = async () => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const json = await response.json();
            setTag(json);
            console.log("Value inside filtered tags is ", value);
            pid = 2;
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
    setValue(2);
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

  // Fetching tags data
  useEffect(() => {
    const tagsdataurl2 = `http://localhost:8000/polls/list_tags/`;

    const TagData = async () => {
      try {
        const response = await fetch(tagsdataurl2);
        if (response.ok) {
          const json2 = await response.json();
          console.log("This is tags", json2);
          setData2(json2);
          
        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    TagData();
  }, []);

  if (!data2 || data2.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
    <div style={{display:"flex"}}>
    <div style={{marginRight:"3rem"}}>
    <div style={{  backgroundColor: "rgb(212, 208, 208)", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)", height: "200px"}}>
        <div style={{ padding: "1rem" }}>
          {Array.isArray(data2["Tags"]) && data2["Tags"].map((tag, index) => (
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
   
      </div>
    </div>
      
      <div><Table data={value === 1 ? pollsdata : tag} /></div>
     
    </div>
      
    </>
  );
}

export default FilterBtn;
