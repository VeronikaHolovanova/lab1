console.log('Task5: Quiqk sort\n')

function quickSort (arr) {
  if (arr.length < 2) return arr
  const pivot = arr[0]
  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}

console.log('Sorted array:\n' + quickSort([2, 1, 1, 0, 5, 9, 4]))
