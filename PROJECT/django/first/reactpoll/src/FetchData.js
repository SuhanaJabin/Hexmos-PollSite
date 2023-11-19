import React, { useEffect, useState } from 'react';
import Table from './Table';
import Table2 from './Table2';
import { useParams } from 'react-router-dom';
import FilterBtn from './FilterBtn';
import SlideBar from './SlideBar';

function FetchData ()  {

  const { id } = useParams();
  const [data, setData] = useState(null);
 
  const[data2,setData2]=useState([]);


  const[question,setQuestion]=useState("")
  const[number,setNumber]=useState("")
  const[votes,setVotes]=useState("")
  const[tags,setTags]=useState([])
  const[cnumber,setCnumber]=useState("")
  const[ctext,setCtext]=useState("")
  const[cvotes,setCvotes]=useState("")


  useEffect(() => {
    const pollsdataurl =`http://localhost:8000/polls/get-polls-data/`;
    const tagsdataurl2 =`http://localhost:8000/polls/list_tags/`;

    // const url3= `http://127.0.0.1:8000/polls/pollstag/?tags=${encodeURIComponent(mystring)}`;
    const TagData = async () =>{
      try{
        const response = await fetch(tagsdataurl2);
        if (response.ok) {
          const json2 = await response.json();
          console.log("This is tags",json2);
          setData2(json2);
     
          console.log("This is ", data2)
        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
          
      }
    
    TagData();
    
  

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(pollsdataurl);
      
  //       if (response.ok) {
  //         const json = await response.json();
  //         const columns=Object.keys(json[0])
  //         setData(json);
          
  //          // Store the data in state for rendering
  //         if (json && json.length > 0 && json[0].Choices && json[0].Choices.length > 0) {
  //           setData2(json[0].Choices[0]);
  //         }

  //         if (json && json.length > 0) {
  //           setQuestion(json[0].Question); // Set the initial question
  //         }
  //         if (json && json.length > 0) {
  //           setNumber(json[0].Number); // Set the initial question
  //         }
  //         if (json && json.length > 0) {
  //           setVotes(json[0].TotalVotes); // Set the initial question
  //         }
  //         if (json && json.length > 0) {
  //           setTags(json[0].Tags[0]); // Set the initial question
  //         }
  //         if (json && json.length > 0) {
  //           setCnumber(json.Choices[0].number[0]); // Set the initial question
  //         }
  //         if (json && json.length > 0) {
  //           setCtext(json.Choices[0].choice_text[0]); // Set the initial question
  //         }
  //         if (json && json.length > 0) {
  //           setCvotes(json[0].Choices[0].votes[0]); // Set the initial question
  //         }
     



  //       } else {
  //         console.error('Request failed with status:', response.status);
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }

  
  //   };
   
  //   fetchData();




  }, []);
  // const choicesData = data.map((item) => item.Choices).flat();

  // const choicesData = data.map((item) => item.Choices);
   // second argument is given as an empty array so that the function only gets rendered once.

  return (
    <div style={{display:"flex"}} >
    {/* <div>  <FilterBtn  /></div> */}
    <SlideBar data2={data2} />
    {/* <div>  <Table data={data}/></div> */}

  
  
   
   
  
    


    
    </div>
  );
};

export default FetchData;
