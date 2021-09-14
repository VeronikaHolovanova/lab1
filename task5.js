console.log('Task5: Returns the number of days for a given month and year\n')

const days = function (month, year) {
  return new Date(year, month, 0).getDate()
}

console.log('Number of days: ' + days(09, 1924))
