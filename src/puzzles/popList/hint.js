import React from 'react'
import './popList.css'

const PopListHint = () => {
  const bulbs = Array(6).fill(0).map((_, i) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)

    const bgcolor = {'--random-colour-var': `#${randomColor}`}

    return <div
      key={`${i}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.visibility = 'hidden'
      }}
      data-avatar={`p${i}`} 
      style={{...bgcolor}}>{i}</div>
  })

  return (
    <>
      {bulbs}
    </>
  )
}

export default PopListHint