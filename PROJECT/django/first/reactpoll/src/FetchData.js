// import React,{useEffect} from 'react'
// //useffect is used for fetching the data

// const FetchData = () => {
//     useEffect(()=>{
//         const url="http://localhost:8000/polls/get-polls-data/"

//         const fetchData = async () =>{
//             try{
//                 const response = await fetch(url);
//                 console.log(response)
//                 // console.log(response.json)
//const json = await response.json();
//                 // console.log(json)
//                 console.log(json.data);
//const data=JSON.stringify()
//             }catch(error){
//                 console.log("error",error);
//             }
//         }
//         fetchData();

//     },[]);//second argument is given as an empty array so that the function only gets rendered once.
//   return (
//     <div>FetchData</div>
//   )
// }

// export default FetchData

import React, { useEffect, useState } from 'react';
import Table from './Table';
import Table2 from './Table2';
import { useParams } from 'react-router-dom';

const FetchData =() => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const[data2,setData2]=useState(null);


  const[question,setQuestion]=useState("")
  const[number,setNumber]=useState("")
  const[votes,setVotes]=useState("")
  const[tags,setTags]=useState([])
  const[cnumber,setCnumber]=useState("")
  const[ctext,setCtext]=useState("")
  const[cvotes,setCvotes]=useState("")
  

  useEffect(() => {
    const url =`http://localhost:8000/polls/get-polls-data/`;
  

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          const columns=Object.keys(json[0])
          setData(json);
          
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
          console.log(data[0].tags)

              
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
  // const choicesData = data.map((item) => item.Choices).flat();

  // const choicesData = data.map((item) => item.Choices);
   // second argument is given as an empty array so that the function only gets rendered once.

  return (
    <div>
    <Table data={data}/>
    
  {/* <Table2 data={data} />   */}

    
    </div>
  );
};

export default FetchData;
