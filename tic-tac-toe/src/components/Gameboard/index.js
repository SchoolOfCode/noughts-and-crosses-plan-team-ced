import React from "react";
import Row from "../Row";


export default function Gameboard({winner, setWinner, setGameState , gameState , turn, setTurn }){

    return(
 (!winner)&&<>

        <Row winner={winner} setWinner={setWinner} setGameState={setGameState} row={0} gameState={gameState} turn={turn} setTurn={setTurn}/>
        <Row winner={winner} setWinner={setWinner} setGameState={setGameState} row={1} gameState={gameState} turn={turn} setTurn={setTurn} />
        <Row winner={winner} setWinner={setWinner} setGameState={setGameState} row={2} gameState={gameState} turn={turn} setTurn={setTurn} />
 </>

    )
}