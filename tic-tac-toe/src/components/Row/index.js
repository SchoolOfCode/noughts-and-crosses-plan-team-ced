import React from "react";
import css from "./Row.module.css"
import useCheckWinner from '../../helper.js';


export default function Row({ winner, setWinner, gameState , row, setGameState, turn, setTurn}){


 
  const isWon = useCheckWinner(gameState)

  if (isWon !== false){
      setWinner(isWon)
  }
      
   


    const myRow = gameState[row]
    // array with three arrays in it
    // update one array and preserve the other arrays 
    // at the moment we're adding the entire array back in 
    // solved!
    function handleClick(cell){
        myRow[cell] = turn
        console.log(myRow)
        setGameState( [...gameState.slice(0,row), myRow ,...gameState.slice(row +1)] )
        console.log(gameState)
        setTurn(turn === "O"?"X":"O")
       
    }

 
    return(
    <div className={css.Row}>
        <button onClick={(e)=>{
            e.target.disabled = true
            handleClick(0)
        }
        } className = {css.Cell}>{myRow[0]}</button>
        <button onClick={(e)=>{
            e.target.disabled = true
            handleClick(1)
        }
        } className = {css.Cell}>{myRow[1]}</button>
        <button onClick={(e)=>{
            e.target.disabled = true
            handleClick(2)
        }
        } className = {css.Cell}>{myRow[2]}</button>
    </div>
    )
}