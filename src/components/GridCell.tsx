import React from 'react'
import './GridCell.css'

interface GridCellProps {
  index: number
  gridSize: number
}

export const GridCell = ({ index, gridSize }: GridCellProps) => {
  return (
    <div
      className="GridCell"
      style={{
        width: `calc(var(--board-size) / ${gridSize})`,
        height: `calc(var(--board-size) / ${gridSize})`,
      }}
    />
  )
}
