import React,{useState} from "react";


export default function TextForm(props) {
const [text,setText] = useState('');


  function capitalize(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  } 
    
  const handleUpperClick = ()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case", "success")
  }
  
  
  const handleLowerClick = ()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case", "success")
  }  

  const handleFirstLetterClick = ()=>{
    const sentence = text;
    setText(capitalize(sentence));
    props.showAlert("Converted First Letter to Upper Case", "success")
  } 

  const handleClearClick = ()=>{
    setText('');
    props.showAlert("Text area cleared", "success")
  }  

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }  
  
  return (

    <>
    <div className="container ">
        <h4>{props.heading}</h4>

        <div className="my-3">
            <textarea className="form-control" id="myBox" style={{backgroundColor: 'rgb(240,240,240)'}} rows={10} value={text} onChange={handleOnChange}></textarea>
        </div>

        <button className="btn btn-primary mx-3" type="submit" onClick={handleUpperClick}>Convert to Uppercase</button>  
        
        <button className="btn btn-primary mx-3" type="submit" onClick={handleLowerClick}>Convert to Lowercase</button>

        <button className="btn btn-primary mx-3" type="submit" onClick={handleFirstLetterClick}>Convert First Case to Upper</button>

        <button className="btn btn-primary mx-3" type="submit" onClick={handleClearClick}>Clear Text</button>

    </div>

    <div className="container my-4">
        {/* <h1>Your text summary</h1> */}
        <h5>{text.split(" ").length} words , {text.length} characters</h5>
        <h7>{0.008 * text.split(" ").length} Minutes read  ({0.008 * text.split(" ").length *60} seconds)</h7>
        <br />
        <br />
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  );
}
