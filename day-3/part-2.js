import { input } from './input.js'

const pushTobogganDownHill = (right, down) => {
  let inputList = input.split('\n')

  let treeCount = 0
  let x
  let y = 0

  for (x = 0; x < inputList.length; x += down) {
    const repeatY = y % inputList[x].length
    if (inputList[x][repeatY] === '#') {
      treeCount++
    }
    y += right
  }
  console.log(`On a slope of ${right} right and ${down} down, we would encounter ${treeCount} trees on our toboggan!`)
  return treeCount
}

export const solve = () => {
  const treeCountArray = []
  const slopes = [
    { right: 3, down: 1 },
    { right: 1, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ]

  slopes.map((slope) => {
    const trees = pushTobogganDownHill(slope.right, slope.down)
    treeCountArray.push(trees)
  })

  let totalProduct = 1
  treeCountArray.map((numTrees) => {
    totalProduct = totalProduct * numTrees
  })
  console.log('The total product of all slopes is: ', totalProduct)
  return totalProduct
}

// --- Day 3: Toboggan Trajectory ---
// --- Part Two ---
// Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.
// Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:

// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.

// In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) respectively; multiplied together, these produce the answer 336.
// What do you get if you multiply together the number of trees encountered on each of the listed slopes?

// Your puzzle answer was 3154761400.
// Both parts of this puzzle are complete! They provide two gold stars: **
