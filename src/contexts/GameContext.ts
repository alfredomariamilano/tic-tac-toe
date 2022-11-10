import { createContext } from 'react'

export interface GameData {
  gridSize: number
  playerTurn: 'x' | 'o'
  playerMoves: {
    x: number[]
    o: number[]
  }
}

export interface IGameContext {
  gameData: GameData
  setGameData: (gameData: Partial<GameData>) => void
}

export const gameDataDefault: GameData = {
  gridSize: 3,
  playerTurn: 'x',
  playerMoves: {
    x: [],
    o: [],
  },
}

export const GameContext = createContext<IGameContext>({
  gameData: gameDataDefault,
  setGameData: () => {},
})
