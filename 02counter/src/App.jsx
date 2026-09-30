import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter]=useState(15)

//let Counter=15
const addValue=()=>{
  //console.log("vaLue added",Math.random());
  //Counter=Counter+1
  if(Counter<20){
    setCounter(Counter+1);
  }
 console.log("clicked",Counter);
}
const removeValue=()=>{
  if(Counter>0){
  setCounter(Counter-1);
  }
}
  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter values:{Counter}</h2>
    <button
    onClick={addValue}
    >Add value{Counter}</button>
    <br/>
      <button
      onClick={removeValue}
      >remove value{Counter}</button>
    <p>footer:{Counter}</p>
    </>
     
  )
}

export default App
