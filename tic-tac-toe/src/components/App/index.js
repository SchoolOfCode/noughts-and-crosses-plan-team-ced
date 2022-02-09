// import logo from '../logo.svg';
import './App.css';
import React,{ useState } from "react"
import Gameboard from '../Gameboard';

//[ [null,null,null], [null,null,null], [null,null,null] ] 

function App() {
  const [turn, setTurn] = useState(null)
 
  const [gameState, setGameState] = useState([["x",null,"x"], [null,null,null], [null,"O",null] ])


  return (

    <Gameboard gameState={gameState}/>

  );
}

export default App;
