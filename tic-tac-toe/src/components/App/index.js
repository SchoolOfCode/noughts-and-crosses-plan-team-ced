// import logo from '../logo.svg';
import './App.css';
import React,{ useState } from "react"
import Gameboard from '../Gameboard';

//[ [null,null,null], [null,null,null], [null,null,null] ] 

function App() {
  const [turn, setTurn] = useState("X")
 
  const [gameState, setGameState] = useState([[null,null,null], [null,null,null], [null,null,null] ])


  return (

    <Gameboard setGameState={setGameState} gameState={gameState} turn={turn} setTurn={setTurn}/>

  );
}

export default App;
