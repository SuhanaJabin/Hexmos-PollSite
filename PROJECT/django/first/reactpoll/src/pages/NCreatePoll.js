import React,{useState} from 'react'
import Heading from '../Heading';
// import { AddTextBox, PollDetail } from './pages/PollDetail';
// let optionCounter=3;
import Mainheading from '../Mainheading';
import Textbox from '../Textbox';

function NCreatePoll() {

  const [optionCounter, setOptionCounter] = useState(3);//gave the initial state as 3

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
              <Textbox text="Type your poll question here" />
              <h4>Answer Options</h4>
                <div id="textboxes-container">
                    <Textbox text="Option 1" />
                    <Textbox text="Option 2" />
              </div>
              <div classname="last">
                <div classname="p" style={{marginBottom:"10px"}}>
                  <button type="button" onClick={AddTextBox} >Add Option</button>
                 
                  {/* <p>On click, one more option textbox is added above this button</p> */}
                </div>
              </div>
          </div>
        </div>
        <div >
          <button style={{marginLeft: "10px",padding: "0.5rem", paddingLeft: "3rem",paddingRight: "3rem" }} >Create Poll</button>
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default NCreatePoll