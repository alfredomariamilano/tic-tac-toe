import React, { useContext } from 'react'
import { GameContext } from 'src/contexts/GameContext'
import './Grid.css'
import { GridCell } from './GridCell'

export const Grid = () => {
  const {
    gameData: { gridSize },
  } = useContext(GameContext)
  const gridCells = new Array(gridSize * gridSize).fill(undefined)

  return (
    <section className="Grid">
      <div className="GridBoard">
        <div className="GridCellsContainer">
          {gridCells.map((_, i) => {
            return <GridCell key={i} index={i} />
          })}
        </div>
      </div>
    </section>
  )
}
