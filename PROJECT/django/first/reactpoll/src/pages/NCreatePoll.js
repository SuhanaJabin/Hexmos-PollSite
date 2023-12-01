import React,{useState} from 'react'
import Heading from '../Heading';
// import { AddTextBox, PollDetail } from './pages/PollDetail';
// let optionCounter=3;
import Mainheading from '../Mainheading';
import Textbox from '../Textbox';
import CreatePollBtn from '../CreatePollBtn';

function NCreatePoll() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([{ index: 1, value: '' }]); // Initialize with three empty options
const [tags, setTags] = useState('');


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


  var jsonData={
    "Question":"hi",
  }

  const[optionList,setOptionlList]=[];

  // const handleOptionChange = () =>
  // {


  // }


  const handleOptionChange = (option) => {
    console.log("inside handleoptionchange");
    console.log("This is option: ",option)
    const newOptions = [...options];
    console.log("this is INDEX" ,newOptions.index);

    const container = document.getElementById('textboxes-container');
    console.log("Options Length",options.length)

    console.log("newOptions: ",newOptions)
    // let optionIndex = newOptions.findIndex(opt => opt.index === option.index);
    const optionIndex=newOptions.length;
    console.log("optionIndex Length: ",optionIndex)

    console.log(" New optionIndex: ",optionIndex)
    newOptions[optionIndex] = option;
    setOptions(newOptions);
    console.log("this is option ", newOptions);
  };
  console.log("question: ",question)
  console.log("option: ",options)
 

  const jsonData3 = {
    "Question": question,
    "Options": options.reduce((acc, option, index) => ({ ...acc, [`Option ${index + 1}`]: option }), {}),

    "Tags": tags.split(',').map(tag => tag.trim()),
  };
const newIndex=0
  function AddTextBox() {
    console.log("function is being called");
    const container = document.getElementById('textboxes-container');
    const newIndex = options.length + 1;
    const newOption = { index: newIndex, value: '' };
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
      handleOptionChange(newOption);
    });
  
    newContainer.appendChild(newTextBox);
    container.appendChild(newContainer);
  
    setOptions([...options, newOption]);
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

            <form classname="form" style={{width:"1000px"}}  action="/action_page.php" />
              <h4>Question</h4>
             
              <Textbox className="Question" onInputChange={(name, value) => setQuestion(value)} />
              
              <h4>Answer Options</h4>
                {/* <div className='Option-Textbox' id="textboxes-container">
                    <Textbox/>
                    <Textbox  />
              </div> */}
              
              <div classname="last">
                <div classname="p" style={{marginBottom:"10px"}}  id="textboxes-container">
                <Textbox className="Option" onInputChange={(name, value) => handleOptionChange(value)} />
                  <button type="button" onClick={AddTextBox} >Add Option</button>
                 
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