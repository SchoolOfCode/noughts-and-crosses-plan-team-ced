import React from "react";
import Row from "../Row";


export default function Gameboard({ gameState }){

    return(
 <>

        <Row row={0} gameState={gameState}  />
        <Row row={1} gameState={gameState}  />
        <Row row={2} gameState={gameState}  />
 </>

    )
}