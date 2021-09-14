console.log('Task4: Find the element with the highest repeat rate\n')

function mode (arr) {
  return arr.sort((a, b) =>
    arr.filter(v => v === a).length -
        arr.filter(v => v === b).length
  ).pop()
}

console.log(mode(['pear', 'apple', 'orange', 'apple']))
console.log(mode([1, 1, 2, 2, 2, 3, 4, 5]))