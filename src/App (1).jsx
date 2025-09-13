 import styled from "styled-components"
import './App.css'
import StartGame from "./Components/StartGame"
import { useState } from "react"
import GamePlay from "./Components/GamePlay";

function App() {
  
   const [isGameStarted, setisGameStarted] = useState(false);

   const toggleGamePlay = ()=>{

      setisGameStarted((prev)=>!prev)
   }
   

  return (
     <>
         {isGameStarted===true? <GamePlay/> :  <StartGame  toggle = {toggleGamePlay}  /> }
       

     </>
  )
}

export default App
