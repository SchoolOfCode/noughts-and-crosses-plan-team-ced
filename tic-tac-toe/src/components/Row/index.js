import React from "react";
import css from "./Row.module.css"


export default function Row({gameState , row, setGameState}){
    const myRow = gameState[row]
    // array with three arrays in it
    // update one array and preserve the other arrays 
    // at the moment we're adding the entire array back in 
    // solved!
    function handleClick(cell){
        myRow[cell] = "X"
        console.log(myRow)
        setGameState( [...gameState.slice(0,row), myRow ,...gameState.slice(row +1)] )
        console.log(gameState)
    }


    return(
    <div className={css.Row}>
        <button onClick={()=>handleClick(0)} className = {css.Cell}>{myRow[0]}</button>
        <button onClick={()=>handleClick(1)} className = {css.Cell}>{myRow[1]}</button>
        <button onClick={()=>handleClick(2)} className = {css.Cell}>{myRow[2]}</button>
    </div>
    )
}