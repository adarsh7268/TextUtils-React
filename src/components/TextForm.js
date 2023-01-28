import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick =()=>{
    //console.log("upeercase has been clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
  }
  const handleLowerClick =()=>{
    //console.log("upeercase has been clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success")
  }
  const handleCopy =()=>{
    
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied","success")
  
  }
  const handleExtraSpace=()=>{
    //console.log("upeercase has been clicked"+text);
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra space has been removed","success")
  }
  const handleclearClick =()=>{
    
    let newText="";
    setText(newText);
    props.showAlert("all text has been cleared","success")
  }
  const handleOnChange =(event)=>{
   // console.log("on change");
   setText(event.target.value);
  }
    const[text,setText]=  useState(''); 

  return (
    <>
    <div className="container" style={{Color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}-</h1> 
      <div className="mb-3">
  
      <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color :props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary " onClick={handleUpClick}>Convert To Uppercase</button>
    
  
      <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert To Lowercase</button>
      <button className="btn btn-primary " onClick={handleclearClick}>Clear Text</button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Extra Space</button>
      </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>
        Your Text Summary:
      </h2>
      <p> {text.split(" ").length} : word, {text.length} : characters</p>
      <p> {0.008 * text.split(" ").length} : minutes reading time</p>
      <h2>Preview::</h2>
      <p>{text.length>0?text:"enter something to preview it here"}</p>
    </div>
    </>
  )
}
