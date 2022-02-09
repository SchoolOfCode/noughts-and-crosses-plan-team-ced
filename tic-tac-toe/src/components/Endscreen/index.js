import React from "react";




export default function Endscreen({winner}){



    return (winner && <>
    
    <h1> {winner} has WON! </h1>
    
    </>)
}