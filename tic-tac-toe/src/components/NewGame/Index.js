import React from 'react'

export default function NewButton({setGameState ,}) {
    function newGame() {
        setGameState(([[null,null,null], [null,null,null], [null,null,null] ]))
    }
  return (
    <button onClick={newGame}>
        New Game
    </button>
  )
}


