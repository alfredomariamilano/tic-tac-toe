import { useEffect, useState } from 'react'

export const useCombinations = (gridSize = 3) => {
  const [combinations, setCombinations] = useState<number[][]>([])

  useEffect(() => {
    const combinationsObject: Record<string, number[][]> = {
      horizontal: [],
      vertical: [],
      diagonal: [],
    }

    for (let i = 0; i < gridSize; i++) {
      const combinationHorizontal = []
      const combinationVertical = []

      for (let j = 0; j < gridSize; j++) {
        combinationHorizontal.push(i * gridSize + j)
        combinationVertical.push(i + gridSize * j)
      }

      combinationsObject.horizontal.push(combinationHorizontal)
      combinationsObject.vertical.push(combinationVertical)

      if (i === 0 || i === gridSize - 1) {
        const step = i === 0 ? 1 : -1

        const combinationDiagonal = []

        for (let j = 0; j < gridSize; j++) {
          combinationDiagonal.push(i + (gridSize + step) * j)
        }

        combinationsObject.diagonal.push(combinationDiagonal)
      }
    }

    const combinationsArray = Object.values(combinationsObject).reduce(
      (acc, combinations) => {
        acc.push(...combinations)
        return acc
      },
      [] as number[][],
    )

    setCombinations(combinationsArray)
  }, [gridSize])

  return combinations
}
