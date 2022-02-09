import React from "react";
import Row from "../Row";


export default function Gameboard({setGameState , gameState }){

    return(
 <>

        <Row setGameState={setGameState} row={0} gameState={gameState}  />
        <Row setGameState={setGameState} row={1} gameState={gameState}  />
        <Row setGameState={setGameState} row={2} gameState={gameState}  />
 </>

    )
}