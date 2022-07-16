import React, { useEffect, useState } from 'react'

export const useTime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    let TimeId = setInterval(() => setTime(new Date()), 1000)

    return () => {
      clearInterval(TimeId)
    }
  })

  return time
}