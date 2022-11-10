import React, { useEffect } from 'react'
import { GameContext, gameDataDefault } from 'src/contexts/GameContext'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import './GameContainer.css'
import { Grid } from './Grid'
import { WinnerModal } from './WinnerModal'

export const GameContainer = () => {
  const [gameData, setGameData] = useLocalStorage('gameData', gameDataDefault)

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--grid-size',
      gameData?.gridSize,
    )
  }, [gameData?.gridSize])

  return (
    <GameContext.Provider
      value={{
        gameData,
        setGameData: (partialGameData) => {
          setGameData({
            ...gameData,
            ...partialGameData,
          })
        },
      }}
    >
      <section className="GameContainer">
        <h1>Tic Tac Toe</h1>

        <input
          type="number"
          value={gameData?.gridSize}
          min={3}
          onChange={(e) => {
            const numberValue = Number(e.target.value)

            if (numberValue >= 3) {
              setGameData({
                ...gameData,
                ...gameDataDefault,
                gridSize: numberValue,
              })
            }
          }}
        />

        <button
          onClick={() =>
            setGameData({
              ...gameDataDefault,
              gridSize: gameData?.gridSize,
            })
          }
        >
          Reset
        </button>

        <h3>Turn: Player {gameData.playerTurn}</h3>

        <Grid />

        <WinnerModal />
      </section>
    </GameContext.Provider>
  )
}
