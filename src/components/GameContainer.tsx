import React from 'react'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import './GameContainer.css'
import { Grid } from './Grid'

export const GameContainer = () => {
  const [gridSize, setGridSize] = useLocalStorage('gridSize', 3)

  return (
    <section className="GameContainer">
      <h1>Tic Tac Toe</h1>

      <input
        type="number"
        value={gridSize}
        min={3}
        onChange={(e) => {
          const numberValue = Number(e.target.value)

          if (numberValue >= 3) {
            setGridSize(numberValue)
          }
        }}
      />

      <Grid gridSize={gridSize} />
    </section>
  )
}
