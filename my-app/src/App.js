//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Nav from './Components/Nav';
import Form from './Components/Form';
 import Dlmode from './Components/Dlmode';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [alert , setAlert] = useState(null);
  const kyapta = (type,msg) =>{
    setAlert({type:type, msg:msg});
    setTimeout( () => {
      setAlert(null);
    },2000);
    setInterval(() =>{
      document.title ="dark"
    },1000);
  }
  
  const [Mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      document.getElementById('exampleFormControlTextarea1').style.backgroundColor ='grey';
      document.getElementById('exampleFormControlTextarea1').style.color ='white';
      kyapta("success","dark mode")
  }
  else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById('exampleFormControlTextarea1').style.backgroundColor ='white';
      document.getElementById('exampleFormControlTextarea1').style.color ='grey';
      kyapta("success","light mode")
  }
}
  return(
    <>
    {/* <Router> */}
    <Nav title='Hello' Mode={Mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <Dlmode/>
   <Form heading='Diffrent types of Button' kyapta = {kyapta}/>  

    {/* <Routes> */}
    {/* <Route path='/' element={<Form heading='Change the capitalization or case of text' kyapta = {kyapta}/>}/>
     <Route path='/Dlmode' element={<Dlmode/>}/>
     <Form heading='Diffrent types of Button' kyapta = {kyapta}/>  */}
    {/* </Routes>  */}
    {/* </Router>  */}
    </> 
  );
}

export default App;
