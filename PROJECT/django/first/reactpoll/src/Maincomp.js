
import React, { useState, useEffect, useContext,useRef } from "react";
import "./mystyle.css";
import Table from "./Table"
import {TagsContext,TagsProvider} from "./TagsContext";


function Maincomp() {

  // let text=useContext(BasicContext);
  // console.log("This is teh text",text);

  const{tagsurl,setTagsurl,setMytagsurl,mytagsurl,change,setChange}=useContext(TagsContext);
  console.log("this is the passed data in MAINCMP",tagsurl);
  let mystring2 = tagsurl.toString().split(',').join(',');
  console.log("This is mystring2 in Maincmp",mystring2);
  const prevNonEmptyTagsRef = useRef([]);
  const[allpollsdata,setAllpollsdata]=useState([])
  console.log("Value of change is",change);
 
 
 
 

  const [pollsdata, setPollsData] = useState(null);
  const [question, setQuestion] = useState("");
  const [number, setNumber] = useState("");
  const [votes, setVotes] = useState("");
  let string=""
  let value=0;
  // let mystring2=""


  // let mystring = tagsurl.join(",");
  // if (Array.isArray(tagsurl)) {
  //   let mystring2 = tagsurl.join(",");}
  // console.log("Value is ", value);
  // console.log("mystring2 in Maincmp",mystring2)

 

  useEffect(() => {
    const prevNonEmptyTags = prevNonEmptyTagsRef.current;


    if ( prevNonEmptyTags !== mystring2 && mystring2.length > 0) {
      const url = `http://127.0.0.1:8000/polls/pollstag/?tags=${encodeURIComponent(mystring2)}`;

      const myData = async () => {
     
        try {
          const response = await fetch(url);
          if (response.ok) {
            const json = await response.json();
            setPollsData(json);
            console.log("Value inside filtered tags is ", value);
       
          } else {
            console.error("Request failed");
          }
        } catch (error) {
          console.error("Error", error);
        }
      };

      myData();
      prevNonEmptyTagsRef.current = mystring2;
    // Reset the flag after running the effect
    
    }
  }, [mystring2]);
  if(!mystring2)
  {
    setChange(0);
  }


  useEffect(() => {

  
      const pollsdataurl = `http://localhost:8000/polls/get-polls-data/`;


      const fetchData = async () => {
        try {
          const response = await fetch(pollsdataurl);
      
          if (response.ok) {
            const json = await response.json();
            console.log("This is the ALLpollsdata json in MAIN: ", json)
            const columns = Object.keys(json[0]);
            setAllpollsdata(json);
          
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

  console.log("This is the initial poll data",allpollsdata)
  return (

    <div style={{padding:"1rem"}}>
    
    <div className='table'>
    
        <Table data={change ? pollsdata : allpollsdata}  />
    </div>
    
    </div>
  )
}

export default Maincomp