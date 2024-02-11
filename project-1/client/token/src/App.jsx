import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  return (
    <>
      <Button/>
    </>
  )
}

function Button(){
  const [value, setvalue] = useState("")
  
  // ships the value
  const change = (event)=>{
    setvalue(event.target.value);
  }
  
  const validate = async () => { 
    if (value === "") window.alert("kindley Enter Your Token");
    else{
      try {
        const response = await axios.get('http://localhost:3003/');
        console.log(response.data); 
        let a = 0;
        response.data.forEach((data)=>{
          if (data === value){
            window.alert("You are Shortlisted");
            a+=1;
          }
        })
        if (a===0) window.alert('You are not Shortlisted');
      }catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
  
  return(
    <>
      <input type="text" placeholder="Enter Your Token Name" value={value} onChange={change}/><br/>
      <button onClick={validate}>Verify</button>
    </>
  )
}

export default App
