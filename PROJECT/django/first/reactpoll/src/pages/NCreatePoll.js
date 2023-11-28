import React,{useState} from 'react'
import Heading from '../Heading';
// import { AddTextBox, PollDetail } from './pages/PollDetail';
// let optionCounter=3;
import Mainheading from '../Mainheading';
import Textbox from '../Textbox';
import CreatePollBtn from '../CreatePollBtn';

function NCreatePoll() {

  const [optionCounter, setOptionCounter] = useState(3);//gave the initial state as 3

  // const[click,setClick]=useState(0)

  var jsonData={
    "Question":"hi",
  }

  // const handleClick= () =>
  // {
  //   console.log("clicked")
  //   setClick(1);

  // }

  function AddTextBox() {
      console.log("function is being called");
      const container = document.getElementById('textboxes-container');
      const newContainer = document.createElement('div');
      newContainer.classList.add('container');

      const newTextBox = document.createElement('input');
      newTextBox.type = 'text';
      newTextBox.placeholder = 'Option ' + optionCounter;
      // applying styles
      newTextBox.style.width = '500px';
      newTextBox.style.padding = '5px';
      newTextBox.style.marginBottom = '1rem';

      newContainer.appendChild(newTextBox);
      container.appendChild(newContainer);

      // optionCounter=optionCounter+1;

      setOptionCounter(optionCounter + 1);
  }

  const elem= document.getElementById("textboxes-container");
  console.log("this is extracted: ",elem)

  
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
             
              <Textbox className="Question"  />
              
              <h4>Answer Options</h4>
                <div className='Option-Textbox' id="textboxes-container">
                    <Textbox className= />
                    <Textbox  />
              </div>
              <div classname="last">
                <div classname="p" style={{marginBottom:"10px"}}>
                  <button type="button" onClick={AddTextBox} >Add Option</button>
                 
                  {/* <p>On click, one more option textbox is added above this button</p> */}
                </div>
                <h3>Comma Seperated Tags</h3>
                <Textbox />

              </div>
          </div>
        </div>
        <div >
          <button style={{marginLeft: "10px",padding: "0.5rem", paddingLeft: "3rem",paddingRight: "3rem" }}  >Create Poll</button>
      
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default NCreatePoll