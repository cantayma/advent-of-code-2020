import { input } from './input.js'

// transform allRules to array of arrays allRulesArray
let allRulesArray = []
const allRules = input.split('\n');
const parseInput = () => {
  allRules.map((rule) => {
    allRulesArray.push(rule.split(' '))
  })
  return allRulesArray
}

const reducer = (ruleObj, currentRule, idx) => {
  let formattedRuleArr
  if (idx === 0) {
    formattedRuleArr = currentRule.split('-')
    // occurences are not zero based indeces
    ruleObj['firstOcc'] = parseInt(formattedRuleArr[0]) - 1
    ruleObj['secondOcc'] = parseInt(formattedRuleArr[1]) - 1
  } else if (idx === 1) {
    ruleObj['requiredChar'] = currentRule[0]
  } else if (idx === 2) {
    ruleObj['password'] = currentRule
  }
  return ruleObj
}

const parseRules = (arr) => {
  // takes an array describing one set of password rules
  // returns an object used for validating
  let ruleObj = {}
  return arr.reduce(reducer, ruleObj)
}

const isPasswordValid = (ruleObject) => {
  let i
  let charCount = 0
  for (i = 0; i < ruleObject.password.length; i++){
    //  if the required letter appears at index of first occurence
    if (i === ruleObject.firstOcc && ruleObject.password[i] === ruleObject.requiredChar) {
      charCount++
    //  if the required letter appears at index of second occurence and it has not appeared at the first
    }
    if (i === ruleObject.secondOcc && ruleObject.password[i] === ruleObject.requiredChar) {
      charCount++
    }
  }
  if (charCount === 1) {
    return true
  }
  return false
}

export const solve = () => {
  parseInput()
  let niceList = 0
  allRulesArray.map(singleRuleArray => {
    const parsedObj = parseRules(singleRuleArray)
    const isValid = isPasswordValid(parsedObj)
    if (isValid) {
      niceList++
    }
  })
  console.log('How many passwords passed the new test? ', niceList)
  return niceList
}

// --- Day 2: Password Philosophy ---
// --- Part Two ---
// While it appears you validated the passwords correctly, they don't seem to be what the Official Toboggan Corporate Authentication System is expecting.
// The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from his old job at the sled rental place down the street! The Official Toboggan Corporate Policy actually works a little differently.
// Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.
// Given the same example list from above:

//  1-3 a: abcde is valid: position 1 contains a and position 3 does not.
//  1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
//  2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.

// How many passwords are valid according to the new interpretation of the policies?
// Your puzzle answer was 294.
// Both parts of this puzzle are complete! They provide two gold stars: **
