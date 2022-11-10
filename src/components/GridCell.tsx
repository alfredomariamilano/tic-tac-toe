import React, { useContext } from 'react'
import { GameContext } from 'src/contexts/GameContext'
import './GridCell.css'

interface GridCellProps {
  index: number
}

export const GridCell = ({ index }: GridCellProps) => {
  const {
    gameData: { gridSize, playerMoves, playerTurn },
    setGameData,
  } = useContext(GameContext)

  const selectedPlayerX = playerMoves.x.includes(index)
  const selectedPlayerO = playerMoves.o.includes(index)

  const selectCell = () => {
    if (selectedPlayerX || selectedPlayerO) {
      return
    }

    setGameData({
      playerMoves: {
        ...playerMoves,
        [playerTurn]: [...playerMoves[playerTurn], index],
      },
      playerTurn: playerTurn === 'x' ? 'o' : 'x',
    })
  }

  return (
    <div
      className={`GridCell ${
        (selectedPlayerX || selectedPlayerO) && 'GridCell__selected'
      } ${selectedPlayerX && 'GridCell__selected--x'} ${
        selectedPlayerO && 'GridCell__selected--o'
      }`}
      style={{
        width: `calc(var(--board-size) / ${gridSize})`,
        height: `calc(var(--board-size) / ${gridSize})`,
      }}
    >
      <div className="GridCellInner" onClick={selectCell} />
    </div>
  )
}
