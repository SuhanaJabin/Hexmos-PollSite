import React,{useState} from 'react'
import Heading from '../Heading';
// import { AddTextBox, PollDetail } from './pages/PollDetail';
// let optionCounter=3;
import Mainheading from '../Mainheading';
import Textbox from '../Textbox';
import CreatePollBtn from '../CreatePollBtn';

function NCreatePoll() {
  const [question, setQuestion] = useState('');
  const [myArray,setMyArray]=useState([]);
  const [options, setOptions] = useState([]); // Initialize with three empty options
const [tags, setTags] = useState('');
const [inputValue, setInputValue] = useState('initial');

const handleInputChange = (event) => {
  const value = event.target.value;
  setInputValue(value);
  
  console.log("This is the value in textbox: ",value)
};


  const [optionCounter, setOptionCounter] = useState(3);//gave the initial state as 3

  // const[click,setClick]=useState(0)
  const Poll={
    "Question":"Which is the largest continent on the Earth?",
    "Options":{   
    "Option 1":"Asia",
    "Option 2":"Africa",
  "Option 3":"Europe"},
  "Tags":["continents", "largest"]
  }
  

  const click = () => {
    const jsonData2 = JSON.stringify(jsonData3);
    console.log("This is POST DATA",jsonData3);


//     fetch('http://localhost:8000/polls/create/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     // Include any additional headers if needed
//   },
//   body: jsonData2,
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     //return response.json();
//     return response.text();
//   })
//   .then(data => {
//     // Handle the response from the server
//     console.log('Server Response', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });



  } 
// Make an HTTP POST request to your Django server

  const [newOptions, setNewOptions] = useState([]);


  const handleOptionChange = (option) => {

    console.log("this is option in handleoptionchange",option)
    const optindex=option.length
    console.log("this is INDEX",optindex)
   
      setOptions([...options ,option])

  };
  console.log("question: ",question)
  console.log("option: ",options)

  console.log("Options before reduce:", options);
 

  const jsonData3 = {
    "Question": question,
    "Options": (() => {
      const optionsObject = {};
      if (Array.isArray(options)) {
        options.forEach((option, index) => {
          optionsObject[`Option ${index + 1}`] = option;
        });
      } else {
        console.error("Options is not an array:", options);
      }
      return optionsObject;
    })(),
  
    "Tags": tags.split(',').map(tag => tag.trim()),
  };
  let i

 
  console.log("Type of options:", Array.isArray(options));





  console.log("this is OPTION INDEX",options)
const newIndex=0
  function AddTextBox() {
    console.log("This is the inputValue",inputValue)
    console.log("function is being called");
    const container = document.getElementById('textboxes-container');
    const newIndex = options.length;
    console.log("This is newIndex",newIndex)
    const newOption = { index: newIndex, value: inputValue };
    console.log("Newoption: ",newOption)
  
    const newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    const newTextBox = document.createElement('input');
    newTextBox.type = 'text';
    newTextBox.placeholder = 'Option ' + newIndex;
    newTextBox.style.width = '500px';
    newTextBox.style.padding = '5px';
    newTextBox.style.marginBottom = '1rem';
  
    newTextBox.addEventListener('input', (event) => {
      newOption.value = event.target.value;
  
      console.log("This is the newoption in handleinputchange",newOption)
    });
  
    newContainer.appendChild(newTextBox);
    container.appendChild(newContainer);
  
    setOptions([...options, newOption]);
    console.log("After setting the value: ",newOption);
   
  }
  
  

  const elem= document.getElementById("textboxes-container");
  console.log("this is extracted: ",elem);


  
  return (
    <div>
        <Mainheading name="Create Poll" />
    <div class="main">
      <Heading />
      <div style={{display: "flex", flexDirection: "column"}} classname="main-div">
        <div className="section-1">
          <div classname="boxn"> 
          {Array.isArray(options) ? (
  options.map(option => (
    <div key={option.index}>
      <p>Option {option.value}</p>
    </div>
  ))
) : (
  <p>Options is not an array</p>
)}

            <form classname="form" style={{width:"1000px"}}  action="/action_page.php" />
              <h4>Question</h4>
             
              <Textbox className="Question" onInputChange={(name, value) => setQuestion(value)} />
              
              <h4>Answer Options</h4>
              <div classname="last">
                <div classname="p" style={{marginBottom:"10px"}}  id="textboxes-container">
                
                 {/* <Textbox className="Option" onInputChange={(name,value)=> handleOptionChange(value)} /> */}

                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        style={{ width: '500px', padding: '5px', marginBottom: '0.5rem' }}
        
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
              

              

                  <button type="button" onClick={() => { AddTextBox(); }} >Add Option</button>
                 
                  {/* <p>On click, one more option textbox is added above this button</p> */}
                </div>
                <h3>Comma Seperated Tags</h3>
                <Textbox className="Tags" onInputChange={(name, value) => setTags(value)} />


              </div>
          </div>
        </div>
        <div >
          <button onClick={() => click()} style={{marginLeft: "10px",padding: "0.5rem", paddingLeft: "3rem",paddingRight: "3rem" }}  >Create Poll</button>
      
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default NCreatePoll