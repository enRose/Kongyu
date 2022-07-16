import React, { useEffect, useState } from 'react'
import { fetchData } from './data'
import ReadMe from './readme.md'
import './infinity.css'
import {Markdown} from '../../component/Markdown'
import officeMap from './office-map.png'
import answer from './one-possible-answer.md'

export const DisplayChildrenRecursively = (props) => {
  const { children } = props
  const [clickCount, setClickCount] = useState({})

  const rightArrow = '▶' //'&#&#9654;'
  const downArrow = '▼'//'&#&#9660;'

  if (!children || children.length === 0) {
    return
  }

  const handleClick = (e) => {
    if (e.target !== e.currentTarget) return

    const elmId = e.currentTarget.id

    clickCount[elmId] = clickCount[elmId] ? clickCount[elmId] + 1 : 1

    setClickCount({ ...clickCount })
  }

  const WhichArrow = (props) =>
    shouldExpand(props.clickCount) ? downArrow : rightArrow

  const shouldExpand = (clickCount) =>
    !clickCount || clickCount % 2 === 0 ? false : true

  return (
    <div className='left-space'>
      {children?.map(child => (
        <div key={`${child.id}-${child.name}`} id={`${child.id}-${child.name}`}
          onClick={handleClick}>

          <WhichArrow clickCount={clickCount[`${child.id}-${child.name}`]} />
          <span className='name-space'>{child.name}</span>
          {shouldExpand(clickCount[`${child.id}-${child.name}`]) ?
            <DisplayChildrenRecursively children={child.children} /> : null}
        </div>
      ))}
    </div>
  )
}

export const InfinityRender = () => {
  const [showAnswer, setShowAnswer] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData().then((d) => setData(d))
  }, [])

  return (
    <div className='container'>
      <div>
        <img src={officeMap}></img>
        <Markdown file={ReadMe} />
        <button style={{marginBottom: '1em'}} onClick={()=>setShowAnswer(true)}>Show show answer</button>
      </div>

      {showAnswer ? <Markdown file={answer} /> : null}

      {showAnswer ? data.map(eventItem =>
        <div
          className='top-level-space'
          id={eventItem.id}
          key={eventItem.id}>
          <div>
            • <span className='name-space'>{eventItem.name}</span>
            <DisplayChildrenRecursively children={eventItem.children} />
          </div>
        </div>
      ): null}
    </div>
  )
}