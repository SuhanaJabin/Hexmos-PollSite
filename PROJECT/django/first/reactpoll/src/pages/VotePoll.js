import React, { useEffect, useState } from 'react';
import "../mystyle.css";
import Heading from "../Heading";
import Mainheading from "../Mainheading";
import { useParams } from 'react-router-dom';
import Input from "../Input";

function VotePoll() {
  const { id } = useParams();
  const [choicesData, setChoicesData] = useState([]);
 
  const [data, setData] = useState(null);

  const[data2,setData2]=useState(null);

  const[question,setQuestion]=useState("");

  const[number,setNumber]=useState("");
  const[votes,setVotes]=useState("");
  const[tags,setTags]=useState([]);
  const[cnumber,setCnumber]=useState("");
  const[ctext,setCtext]=useState("");
  const[cvotes,setCvotes]=useState("");
  const url = `http://localhost:8000/polls/get-polls-data/${id}`;

  
  useEffect(() => {
   

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
       
          const columns=Object.keys(json[0])
          setData(json);
          console.log("inside useffect hook");
          console.log("Data is set as ",json);
          if (data == null){console.log("no data available")}
           
          console.log(data[0].Tags[0])
       
          
           // Store the data in state for rendering
          if (json && json.length > 0 && json[0].Choices && json[0].Choices.length > 0) {
            setData2(json[0].Choices[0]);
          }

          if (json && json.length > 0) {
            setQuestion(json[0].Question); // Set the initial question
          }
          if (json && json.length > 0) {
            setNumber(json[0].Number); // Set the initial question
          }
          if (json && json.length > 0) {
            setVotes(json[0].TotalVotes); // Set the initial question
          }
          if (json && json.length > 0) {
            setTags(json[0].Tags[0]); // Set the initial question
          }
          if (json && json.length > 0) {
            setCnumber(json.Choices[0].number[0]); // Set the initial question
          }
          if (json && json.length > 0) {
            setCtext(json.Choices[0].choice_text[0]); // Set the initial question
          }
          if (json && json.length > 0) {
            setCvotes(json[0].Choices[0].votes[0]); // Set the initial question
          }
        const no=id-1;
    
        // let choices=data[no]["Choices"];
        // console.log("These are the choices ",choices)

        console.log("MY ID IS ",id)
        
        // if (data && Array.isArray(data)) {
        //   const choices = data.map((item) => item.Choices).flat();
        //   console.log(choices);
        //   setChoicesData(choices);
        // }
       
          

              
  //     <h2>Fetched Data</h2>
    
  //     {data.map((item) => (
  //       <div key={item.Number}
  //       >
  //       <table>
  //       <thead><tr>
  //         {columns.map((column) => (
  //         <th key={column}>{column}</th>
  //       ))}
  //         </tr></thead>
          
  //       </table>
  //       <p>Id: {item.Number}</p>
  //         <h3>Question: {item.Question}</h3>
  //         <h3>{item.TotalVotes}</h3>
  //         <h3>{item.Tags}</h3>
  
          
  //         {/* You can display other attributes here */}
  //       </div>
  // ))}


        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }

  
    };
   
    fetchData();
   



  }, []);
  console.log("MY ID IS ",id)
  console.log("This is my fetched data",data)

  if(data==null)
  {console.log("No data")}
  else
  {
    const q=data[0]["Question"];
  console.log("This is question in NPollDetail",q);
  }

  // if (data && Array.isArray(data)) {
  //   choicesData = data.map((item) => item.Choices).flat();
  //   console.log(choicesData);
  // }



  return (
    <div>
     
      <Mainheading name="Vote on this poll" />
      <div class="main">
        <Heading />
        <div class="">
          <div class="page">
          {data && data[0] && (
  <div>
    <h3>{data[0]["Question"]}</h3>

    
  </div>
)}
            <Input text={data[0]["Choices"]["choice_text"]} />
            <Input text="No" />

            {/* {choicesData.map((choice, index) => (
  <Input text={choice[index]} key={index} />
))} */}

            <button style={{ marginTop: "1rem" }} class="btn3">
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotePoll;
