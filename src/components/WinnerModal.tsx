/* eslint-disable no-alert */
import React, { useContext } from 'react'
import './WinnerModal.css'
import { GameContext, gameDataDefault } from 'src/contexts/GameContext'
import { useCombinations } from 'src/hooks/useCombinations'

export const WinnerModal = () => {
  const {
    gameData: { gridSize, playerMoves },
    setGameData,
  } = useContext(GameContext)
  const combinations = useCombinations(gridSize)

  const playerXWon = combinations.some((combination) => {
    return combination.every((i) => playerMoves.x.includes(i))
  })

  const playerOWon = combinations.some((combination) => {
    return combination.every((i) => playerMoves.o.includes(i))
  })

  if (playerXWon || playerOWon) {
    const winner = playerXWon ? 'x' : 'o'

    return (
      <section className="WinnerModal">
        <h1>Player {winner} won!</h1>

        <button onClick={() => setGameData({ ...gameDataDefault, gridSize })}>
          Reset
        </button>
      </section>
    )
  }

  return null
}
