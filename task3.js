console.log('Task3: calculate factorial of a number\n')

function factorial (n) {
  if (n < 0 || n === 0 || n === 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
const n = 10
const answer = factorial(n)
console.log('The factorial of ' + n + ' is ' + answer)