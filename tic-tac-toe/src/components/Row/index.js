import React from "react";
import css from "./Row.module.css"


export default function Row({gameState , row, setGameState}){
    const myRow = gameState[row]

    function handleClick(cell){
        const newArray = [...myRow][cell] = "newValue"
        setGameState( ...gameState.slice(0,row),  newArray, ...gameState.slice(row)  )
    }


    return(
    <div className={css.Row}>
        <button className = {css.Cell}>{myRow[0]}</button>
        <button className = {css.Cell}>{myRow[1]}</button>
        <button onClick={()=>handleClick(2)} className = {css.Cell}>{myRow[2]}</button>
    </div>
    )
}