import React, { lazy, useState } from 'react'

export const genFibonacci = (len) => {
  console.log('fibonacci')

  // write your answer here:

  const fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

  return fibonacciArray
}

const Fibonacci = () => {
  const [len, setLen] = useState()
  const [confetti, setConfetti] = useState()
  const [fibonacciSequence, setFibonacciSequence] = useState()
  const Confettila = confetti

  return (
    <div>
      {confetti ? <Confettila start={true}/> : <></>}

      <p>Given a number, we print a Fibonacci sequence of that number </p>

      <label for="fibonacciLength">Length:</label>
      <input onChange={e => setLen(e.currentTarget.value)} type="number" id="fibonacciLength" name="fibonacciLength" />
      <button onClick={() => {
        const result = genFibonacci(len)
        
        setFibonacciSequence(result)

        setConfetti(isFibonacci(result) ? lazy(() => import('../../component/Confetti')) : null)
      }}>Print</button>
      <p>{fibonacciSequence?.join(',')}</p>
    </div>
  )
}

export const isFibonacci = (fibonacciArray) => {
  if (fibonacciArray.length <= 2) {
    return false
  }

  return fibonacciArray.every((f, index) =>
    index >= fibonacciArray.length - 2 || f + fibonacciArray[index + 1] === fibonacciArray[index + 2]
  )
}

export default Fibonacci