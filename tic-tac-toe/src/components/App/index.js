// import logo from '../logo.svg';
import './App.css';
import React,{ useState } from "react"
import Gameboard from '../Gameboard';
import Endscreen from '../Endscreen';


//[ [null,null,null], [null,null,null], [null,null,null] ] 

function App() {
  const [turn, setTurn] = useState("X")
 const [winner, setWinner] = useState(false)
  const [gameState, setGameState] = useState([[null,null,null], [null,null,null], [null,null,null] ])

 

  

  
 

  return (
<>
    <Gameboard winner={winner} setWinner={setWinner} setGameState={setGameState} gameState={gameState} turn={turn} setTurn={setTurn}/>
    
    <Endscreen winner={winner} />
</>
 
  );
}

export default App;
