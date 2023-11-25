
import React, { useState, useEffect, useContext,useRef } from "react";
import "./mystyle.css";
import Table from "./Table"
import {TagsContext,TagsProvider} from "./ThingsContext";


function Maincomp() {

  // let text=useContext(BasicContext);
  // console.log("This is teh text",text);



  let SelTags=useContext(TagsContext)
  console.log("This is the first selTag in MAINCOMP ",SelTags[0],SelTags[1])

  const [pollsdata, setPollsData] = useState(null);
  const [question, setQuestion] = useState("");
  const [number, setNumber] = useState("");
  const [votes, setVotes] = useState("");
  useEffect(() => {
  
      const pollsdataurl = `http://localhost:8000/polls/get-polls-data/`;

      const fetchData = async () => {
        try {
          const response = await fetch(pollsdataurl);
      
          if (response.ok) {
            const json = await response.json();
            console.log("This is the pollsdata json in MAIN: ", json)
            const columns = Object.keys(json[0]);
            setPollsData(json);
          
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
 
  }, []);
  return (

    <div style={{padding:"1rem"}}>
    
    <div className='table'>
    
        <Table data={pollsdata} />
    </div>
    
    </div>
  )
}

export default Maincomp