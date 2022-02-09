import React from "react";
import css from "./Row.module.css"


export default function Row({gameState , row}){
    const myRow = gameState[row]



    return(
    <div className={css.Row}>
        <button className = {css.Cell}>{myRow[0]}</button>
        <button className = {css.Cell}>{myRow[1]}</button>
        <button className = {css.Cell}>{myRow[2]}</button>
    </div>
    )
}