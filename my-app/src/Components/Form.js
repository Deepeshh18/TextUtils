import React, { useState } from 'react';

export default function Form(props){
    const ToUpperCase =() =>{
        console.log('Convert Into ToUpperCase' + text)//react hooks
        let newText = text.toUpperCase();
        setText(newText)
        props.kyapta('converted to UpperCase');
    }

    const ToLowerCase = () =>{
        console.log('Convert Into ToLowerCase' + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.kyapta('converted to LowerCase')
    }
    
    const OnChange = (event) =>{
        console.log('OnChange')
        setText(event.target.value)
    }
    
    const Clear = () =>{  
        let newText = text.slice(text.length);
        setText(newText)
    }

    const Trim = () =>{  
      let newText = text.split(/[ ]+/);
      setText((newText).join(" "));
      props.kyapta('Safh')
   }

  const Copy = () =>{  
    let newText = document.getElementById("exampleFormControlTextarea1")
    newText.select()
    navigator.clipboard.writeText(newText.value);
    props.kyapta('Copy')
   }

    const Red = () =>{
      document.body.style.backgroundColor= "red"
      props.kyapta('Red')
    }

    const Green = () =>{
      document.body.style.backgroundColor= "green"
      props.kyapta('Green')
    }

    const Yellow = () =>{
      document.body.style.backgroundColor= "yellow"
      props.kyapta('Yellow')
    }

    const Gray = () =>{
      document.body.style.backgroundColor= "gray"
      props.kyapta('Gray')
    }

    const lg = () =>{
      document.body.style.backgroundColor= "white"
      props.kyapta('bg remove')
    }

    const [text, setText] = useState('Enter Your Text Here');
    return(
        <div>

<div className="mb-3" style={{color: props.Mode==='dark'?'white' : 'black'}}>
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={OnChange} rows="3"></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={ToUpperCase}>
  UpperCase
</button>
<button type="button" className="btn btn-primary" onClick={ToLowerCase}>
  LowerCase
</button>
<button type="button" className="btn btn-primary" onClick={Clear}>
  Text-Remove
</button>
<button type="button" className="btn btn-primary" onClick={Trim}>
  WhiteSpace
</button>
<button type="button" className="btn btn-primary" onClick={Copy}>
  Copy
</button>
<h1>Word Count</h1>
<p>{text === ''?0: text.split(" ").length} Word & {text.length} Characters </p>
<p>{0.008*text.length} Minutes to Read</p>
<h2>Preview</h2>
<p>{text}</p>

<h1>Button backgroundColor Change</h1>
<button type="button" className="btn btn-secondary" onClick={Gray}>Secondary</button>
<button type="button" className="btn btn-success" onClick={Green}>Success</button>
<button type="button" className="btn btn-danger" onClick={Red}>Danger</button>
<button type="button" className="btn btn-warning" onClick={Yellow}>Warning</button>
<button type="button" className="btn btn-light" onClick={lg}>Bg Remove</button>
   </div>
    )
}