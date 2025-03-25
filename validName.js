function validName(name) {
  const words = name.split(' ')
  if (words.length < 2 || words.length > 3) return false // Rule 3

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const isInitial = word.length === 2 && word[1] === '.'
    const isWord = word.length > 1 && !word.includes('.')
    const isCapitalized = word[0] === word[0].toUpperCase()

    if (!isCapitalized) return false // Rule 1
    if (!isInitial && !isWord) return false // Must be either an initial or word
    if (isInitial && i === words.length - 1) return false // Rule 5
  }

  const firstIsInitial = words[0].length === 2 && words[0][1] === '.'
  const secondIsInitial = words.length === 3 && words[1].length === 2 && words[1][1] === '.'
  const lastIsWord = words[words.length - 1].length > 1

  if (words.length === 3 && firstIsInitial && !secondIsInitial) return false // Rule 4

  return lastIsWord
}

// Test cases
console.log(validName('A. Kesya'))
console.log(validName('A. K. Putri'))
console.log(validName('Angelina K. Putri'))
console.log(validName('Angelina Kesya Putri'))

console.log(validName('Angelina'))
console.log(validName('A Kesya'))
console.log(validName('a. Kesya'))
console.log(validName('A.Kesya Putri'))
console.log(validName('A.K.P'))
console.log(validName('Angelina. K. Putri'))
