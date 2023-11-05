import React from 'react'

function AddTextBox() {
  return (
    <div>const container = document.getElementById('textboxes-container');
    const newContainer = document.createElement('div');
    newContainer.classList.add('container');

    

    const newTextBox = document.createElement('input');
    newTextBox.type = 'text';
    newTextBox.placeholder = 'Option ' + optionCounter;
    //applying styles
    newTextBox.style.width = '500px';
    newTextBox.style.padding = '5px';
    newTextBox.style.marginBottom = '1rem';

    newContainer.appendChild(newTextBox);
    container.appendChild(newContainer);

    optionCounter++;</div>
  )
}

export default AddTextBox