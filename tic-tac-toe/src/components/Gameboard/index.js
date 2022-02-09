import React from "react";
import Row from "../Row";


export default function Gameboard({setGameState , gameState , turn, setTurn }){

    return(
 <>

        <Row setGameState={setGameState} row={0} gameState={gameState} turn={turn} setTurn={setTurn}/>
        <Row setGameState={setGameState} row={1} gameState={gameState} turn={turn} setTurn={setTurn} />
        <Row setGameState={setGameState} row={2} gameState={gameState} turn={turn} setTurn={setTurn} />
 </>

    )
}