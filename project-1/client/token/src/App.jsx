import { useState,memo} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  return (
    <>
      <Button/>
    </>
  )
}


const Button=memo(function Button(){
  const [value, setvalue] = useState("")
  
  // ships the value
  const change = (event)=>{
    setvalue(event.target.value);
  }
  
  const validate = async () => { 
    if (value === "") window.alert("kindly Enter Your Token");
    else{
      try {
        const response = await axios.get('https://backend-chi-puce.vercel.app/');
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
      <input id='input' type="text" placeholder="Enter Your Token Name" value={value} onChange={change}/><br/>
      <button id="btn" onClick={validate}>Verify</button>
    </>
  )
}
)
export default App
