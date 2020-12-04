import { input } from './input.js'

const stringList = input.split('\n');

export const solve = () => {
  const myExpenseReport = stringList.map(item => parseInt(item))
  // wanted to use map fn, but you can't break out of a map with return...so for loop is better here
  let i
  let j
  let k
  for (i = 0; i < myExpenseReport.length; i++) {
    for (j = 0; j < myExpenseReport.length; j++) {
      for (k = 0; k < myExpenseReport.length; k++) {
        if (myExpenseReport[i] + myExpenseReport[j] + myExpenseReport[k] === 2020) {
          console.log(`The winners are ${myExpenseReport[i]}, ${myExpenseReport[j]}, and ${myExpenseReport[k]}!`)
          console.log('The answer is: ', myExpenseReport[i] * myExpenseReport[j] * myExpenseReport[k])
          return myExpenseReport[i] * myExpenseReport[j] * myExpenseReport[k]
        }
      }
    }
  }
}

// --- Day 1: Report Repair ---
// --- Part Two ---
// The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.
// Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.
// In your expense report, what is the product of the three entries that sum to 2020?
// Your puzzle answer was 276912720.
// Both parts of this puzzle are complete! They provide two gold stars: **