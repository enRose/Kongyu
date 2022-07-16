import React, { useState, Suspense } from 'react'
import { usePuzzle, puzzles } from './hook/usePuzzle'
import { InfinityRender } from './interview/infinityRender'
import './App.css'

const App = () => {
  const [interviewMode, setInterviewMode] = useState(false)
  const { goTo, remove, puzzle } = usePuzzle()
  const [hint, setHint] = useState(false)

  const Puzzle = puzzle?.puzzle
  const Hint = puzzle?.hint

  return (
    interviewMode ?
      <div key='app-interview' className="App">
        <button className='mode-switch' key='fun-button' onClick={() => setInterviewMode(false)}>Back to fun mode</button>
        <InfinityRender />
      </div> :

      <div key='app-puzzle' className="App">
        <div>
          <button key='interview-button' onClick={() => setInterviewMode(true)}>Interview mode</button>
        </div>

        {puzzle ?
          <Suspense fallback={<div>Loading...</div>}>
            <div>
              <button key='remove-button' onClick={remove}>Go back</button>
            </div>
            <button key='hint-button' onClick={() => setHint(!hint)}>{hint ? 'Reset' : 'Show hint'}</button>
            {hint ? <Hint /> : <Puzzle />}
          </Suspense> :
          Object.keys(puzzles).map(key =>
            <div key={`div-${key}`}>
              <button id={key} key={key}
                onClick={e => goTo(e.currentTarget.id)}>{puzzles[key].name}
              </button>
            </div>
          )
        }
      </div>
  )
}

export default App