
//import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React, {useState} from 'react'
import Alerts from './Component/Alerts';
function App() {
  const [Mode,setMode]=useState('light')
  const [alert,setalert]=useState(null)
  const togglemode=()=>{
    if(Mode==='light')
    { 
      setMode('dark');
      document.body.style.backgroundColor='gray'
      document.body.style.color='white'
      showalert("success","dark mode is enabled")
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showalert("success","light mode is enabled")
    }
  }
  const showalert=(type,msg)=>{
      setalert({
        type:type,
        msg:msg
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }
  return (
    <>
    <Navbar mode={Mode} Togglemode={togglemode} />
    <Alerts alert={alert} />
    <Textform showAlert={showalert} mode={Mode} Togglemode={togglemode}/>
    {/* <About/> */}
    </>
  );
}

export default App;

