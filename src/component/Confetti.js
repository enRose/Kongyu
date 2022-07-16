import React, { useEffect, useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default (start = true) => {
  const [stop, setStop] = useState()
  const { width, height } = useWindowSize()

  useEffect(() => {
    setStop(false)

    setTimeout(() => {
      setStop(true)
    }, 5000)

  }, [start])

  return (
    <>
      {
        stop ? <></> :
          <Confetti
            width={width}
            height={height}
          />
      }
    </>
  )
}