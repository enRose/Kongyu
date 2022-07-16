const fib = (n, firstNum, secondNum, count, arr) => {
  if(count >= n) return

  console.log(firstNum)

  (arr || []).push(firstNum)

  count++

  fib(n, secondNum, firstNum + secondNum, count, arr)
}