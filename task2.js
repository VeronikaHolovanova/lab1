console.log('Task2: find all permutations of a word\n')

const findPermutations = (string) => {
  if (!string || typeof string !== 'string') {// validation check
    return 'Please enter a string'
  }

  if (!!string.length && string.length < 2) {//trivial case
    return string
  }

  const permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    const char = string[i]

    if (string.indexOf(char) !== i) { continue }

    const remainder = string.slice(0, i) + string.slice(i + 1, string.length)

    for (const permutation of findPermutations(remainder)) {
      permutationsArray.push(char + permutation)
    }
  }
  return permutationsArray
}
const word = 'word'
console.log(findPermutations(word))