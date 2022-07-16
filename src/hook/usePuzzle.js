import React, { lazy, useState } from 'react'

export const puzzles = {
  'fading': {
    name: 'fading',
    puzzle: lazy(() => import('../puzzles/fading')),
  },
  'pop-list': { 
    name: 'Pop List', 
    puzzle: lazy(() => import('../puzzles/popList')),
    hint: lazy(() => import('../puzzles/popList/hint'))
   },
  'fibonacci': { name: 'Fibonacci', puzzle: lazy(() => import('../puzzles/fibonacci')) },
}

export const usePuzzle = () => {
  const [puzzle, setPuzzle] = useState()

  const goTo = (puzzleId) => setPuzzle(puzzles[puzzleId])

  const remove = () => setPuzzle(undefined)
  
  return {goTo, remove, puzzle}
}