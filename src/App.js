
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
//import About from './components/About';
//import {
//BrowserRouter as Router,
//Routes,
//Route,
//Link
//} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>
  {
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 2000);
  }
  
  
 //console.log(mode);
 const toggleMode=()=>
 {
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='grey';
   showAlert("dark mode has been enabled","sucess");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled","sucess");
   // console.log(mode);
  }
 }
  return (
    <>  
    {/*<Router>*/}
<Navbar title="Textutils App " mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container'>
{/*<Routes>

<Route path="/about" element={<About/>} />

<Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />

</Routes>
*/}
<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
</div>
{/*</Router>*/}
</> 
  );
}

export default App;
