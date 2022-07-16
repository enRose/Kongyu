import { genFibonacci, isFibonacci } from './index'


test('Fib test', () => {
  const f = genFibonacci(10)

  const result = isFibonacci(f)

  expect(result).toBeTruthy()
})