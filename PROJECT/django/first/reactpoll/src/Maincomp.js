
import React, { useState, useEffect, useContext,useRef } from "react";
import "./mystyle.css";
import Table from "./Table"
import {TagsContext,TagsProvider} from "./TagsContext";


function Maincomp() {

  // let text=useContext(BasicContext);
  // console.log("This is teh text",text);


  const prevNonEmptyTagsRef = useRef([]);
  const tag=useContext(TagsContext)
  let value; 
 
  console.log("This is the data in MAINCOMP ",tag)

  const [pollsdata, setPollsData] = useState(null);
  const [question, setQuestion] = useState("");
  const [number, setNumber] = useState("");
  const [votes, setVotes] = useState("");
  let string=""
 
//  if(Array.isArray(SelTags)){
//   string = SelTags.map(element => {
//     return element.trim();
//   });
//   console.log("After trimming: ",string)


//  }
 
 

 
//   // let nonEmptyTags = SelTags.filter(tag => tag && tag.trim() !== "");
//   let mystring = string.join(",");
//   useEffect(() => {
//     const prevNonEmptyTags = prevNonEmptyTagsRef.current;

//     if (  prevNonEmptyTags !== string && string.length > 0) {
//       const url = `http://127.0.0.1:8000/polls/pollstag/?tags=${encodeURIComponent(mystring)}`;

//       const myData = async () => {
//         try {
//           const response = await fetch(url);
//           if (response.ok) {
//             const json = await response.json();
//             setTagsdata(json);
       
     
//           } else {
//             console.error("Request failed");
//           }
//         } catch (error) {
//           console.error("Error", error);
//         }
//       };

//       myData();
//       prevNonEmptyTagsRef.current = string;
//       // Reset the flag after running the effect
     
//     }
//   }, [string]);



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
    
        <Table data={tag} />
    </div>
    
    </div>
  )
}

export default Maincomp