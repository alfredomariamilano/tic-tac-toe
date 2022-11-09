import React from 'react'
import './Grid.css'
import { GridCell } from './GridCell'

interface GridProps {
  gridSize: number
}

export const Grid = ({ gridSize }: GridProps) => {
  const gridCells = new Array(gridSize * gridSize).fill(undefined)

  console.log('====================================')
  console.log(gridSize)
  console.log(gridCells)
  console.log('====================================')

  return (
    <section className="Grid">
      <div className="GridBoard">
        <div className="GridCellsContainer">
          {gridCells.map((_, i) => {
            return <GridCell key={i} index={i} gridSize={gridSize} />
          })}
        </div>
      </div>
    </section>
  )
}
