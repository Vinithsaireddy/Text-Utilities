import React, { useState, useEffect } from 'react';

export default function TextForm({ heading, theme, showAlert }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const myBox = document.querySelector("#myBox");
    if (myBox) {
      myBox.style.backgroundColor = theme === 'light' ? 'white' : 'lightgrey';
    }
  }, [theme]);

  const handleUpperClick = () => {
    setText(text.toUpperCase());
    showAlert('Text converted to UpperCase!', 'success');
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    showAlert('Text converted to LpperCase!', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value); 
  };

  const handleClearClick = () => {
    setText('');
    showAlert('Text has Cleared', 'success');
  };

  const countWords = (str) => {
    return str.split(/\s+/).filter(word => word.length !== 0).length;
  };

  return (
    <>
      <div className='container'>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            placeholder='Enter the text'
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary " onClick={handleClearClick}>Clear</button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{countWords(text)} Words</p>
        <p>{text.length} Characters</p>
        <p>{0.008 * countWords(text)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
