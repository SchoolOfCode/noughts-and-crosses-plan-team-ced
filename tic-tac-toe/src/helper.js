import React from "react"


function check(gameState){
  const singleLineState = [ ...gameState[0], ...gameState[1], ...gameState[2] ]
const check = "X"
  let winner = false

  if(gameState[0][0] === check &&  gameState[0][1] === check && gameState[0][2] === check){
    winner = check
  } // row 1

  if(gameState[1][0] === check &&  gameState[1][1] === check && gameState[1][2] === check){
    winner = check
  } // row 2

  if(gameState[2][0] === check &&  gameState[2][1] === check && gameState[2][2] === check){
    winner = check
  } // row 3

  if(gameState[0][0] === check &&  gameState[1][0] === check && gameState[2][0] === check){
    winner = check
  } // column 1

  if(gameState[0][1] === check &&  gameState[1][1] === check && gameState[2][1] === check){
    winner = check
  } // column 2

  if(gameState[0][2] === check &&  gameState[1][2] === check && gameState[2][2] === check){
    winner = check
  } // column 3

  if(gameState[0][0] === check &&  gameState[1][1] === check && gameState[2][2] === check){
    winner = check
  } // diaganol 1

  if(gameState[0][2] === check &&  gameState[1][1] === check && gameState[2][0] === check){
    winner = check
  } // diaganol 2 


      if(gameState[0][0] === check &&  gameState[0][1] === check && gameState[0][2] === check){
      winner = check
    } // row 1

    if(gameState[1][0] === check &&  gameState[1][1] === check && gameState[1][2] === check){
      winner = check
    } // row 2

    if(gameState[2][0] === check &&  gameState[2][1] === check && gameState[2][2] === check){
      winner = check
    } // row 3

    if(gameState[0][0] === check &&  gameState[1][0] === check && gameState[2][0] === check){
      winner = check
    } // column 1

    if(gameState[0][1] === check &&  gameState[1][1] === check && gameState[2][1] === check){
      winner = check
    } // column 2

    if(gameState[0][2] === check &&  gameState[1][2] === check && gameState[2][2] === check){
      winner = check
    } // column 3

    if(gameState[0][1] === check &&  gameState[1][1] === check && gameState[2][2] === check){
      winner = check
    } // diaganol 1

    if(gameState[0][2] === check &&  gameState[1][1] === check && gameState[2][0] === check){
      winner = check
    } // diaganol 2 

    //

    const checkO = "O"

    if(gameState[0][0] === checkO &&  gameState[0][1] === checkO && gameState[0][2] === checkO){
      winner = checkO
    } // row 1

    if(gameState[1][0] === checkO &&  gameState[1][1] === checkO && gameState[1][2] === checkO){
      winner = checkO
    } // row 2

    if(gameState[2][0] === checkO &&  gameState[2][1] === checkO && gameState[2][2] === checkO){
      winner = checkO
    } // row 3

    if(gameState[0][0] === checkO &&  gameState[1][0] === checkO && gameState[2][0] === checkO){
      winner = checkO
    } // column 1

    if(gameState[0][1] === checkO &&  gameState[1][1] === checkO && gameState[2][1] === checkO){
      winner = checkO
    } // column 2

    if(gameState[0][2] === checkO &&  gameState[1][2] === checkO && gameState[2][2] === checkO){
      winner = checkO
    } // column 3

    if(gameState[0][0] === checkO &&  gameState[1][1] === checkO && gameState[2][2] === checkO){
      winner = checkO
    } // diaganol 1

    if(gameState[0][2] === checkO &&  gameState[1][1] === checkO && gameState[2][0] === checkO){
      winner = checkO
    } // diaganol 2 

   
    
    if (!singleLineState.includes(null) )
    {
      winner =  "Draw"
    }

    return winner

    
  }


  export default function usecheckOWinner(gameState){

    

    return check(gameState)



  }