import React, { useEffect, useState } from 'react';
import { Pie } from "../Pie";
import Heading from "../Heading";
import Mainheading from "../Mainheading";
import STable from "../SecondData";
import { SecondData } from "../Data";
import Table2 from "../Table2";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function NPollDetail() {
  const { id } = useParams();
 
  const [data, setData] = useState(null);
  let[tvotes,setTvotes]=useState(0)

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
  
 
  if (data[0] && data[0]["TotalVotes"] != null) {
    setTvotes(data[0]["TotalVotes"]);
    console.log("State is updated")
  } else {
    // Handle the case where data[0] or TotalVotes is null
    tvotes = 0; // Set a default value or handle it according to your requirements
  }
  console.log("Total votes in Poll Detail ", tvotes)
 


        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }

  
    };
   
    fetchData();
   



  }, []);

  // useEffect(() => {
  //   console.log("Total votes in Poll Detail ", tvotes);
  // }, [tvotes]);
  const navigate = useNavigate();
  // if(data[0] && data[0]["Totalvotes"]>0)
  // {
  //   console.log("this is totalvotes",data[0]["TotalVotes"])

  // }
 
 
 
  const navigation= () =>
  {
    navigate(`/VotePoll/${id}`);
  }

  return (
    <div>
      <Mainheading name="Poll Details" />
      <div class="main">
        {/* <div class="first-box">
    <h2>FlyWeight Polls</h2>
  </div> */}
        <Heading />
       
        {/* <a href="{% url 'polls:detail' question.id %}">Vote again?</a> */}
        <div class="main-div" style={{ padding: "1rem" }}>
          <div class="box">
            <div class="box1">
              <div>
             
                {/* <Mainheading name={data.Question} /> */}
              </div>
              <button onClick={() => navigation()} style={{ marginBottom: "1rem" }} class="btn2">
                <h4>Vote on this Poll</h4>
              </button>
              
            
              <Table2 data={data} id={id} />
               
      
       

         
            </div>
            <div class="box2">
              <Pie votes={votes}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NPollDetail;
