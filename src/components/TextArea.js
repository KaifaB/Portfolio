import React, { useState, useEffect} from 'react';

function TextArea() {
    const [text, setText] = useState('');
    const change = (e) => {
        setText(e.target.value);
    }
    const color = (e) => {
        e.target.style.borderBottom = "cyan 2px solid";
    }
    const none = (e) => {
        e.target.style.borderBottom = "";
    }
    useEffect(() => {

    },[text])
    return (
        <textarea id="message" name="message" value = {text} onChange={change} onFocus={color} onBlur={none} required/>
    );
  }
  
  export default TextArea;