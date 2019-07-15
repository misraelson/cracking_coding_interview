// 1.3
// Given two strings, write a method to find if one is a permutation of the other

// Simplifications:
// order the stings, if possible
// check if lengths are equal, if not they cannot be permutation
// could use a hash of alphabet letters, then count the number of times each character occurs in each string
// then compare the hash value numbers, if they are equal they are permutations
// watch out for case sensitivity
// array.sort() works for both numbers and letters, split string on ""

let findPerm = (str1, str2) => {
  let strArray1 = str1.split("").sort()
  let strArray2 = str2.split("").sort()
  if (strArray1.length != strArray2.length) { 
    console.log(false) 
    return false
  }
  else {
    for (i in strArray1) {
      if (strArray1[i] != strArray2[i]) { 
        console.log(false)
        return false 
      }
      else { 
        console.log(true) 
        return true
      }
    }
  }
}

let string1 = "nodejs"
let string2 = "jsnode"

// findPerm(string1, string2)


// WITHOUT SORTING ARRAY OF STRING CHARS
// USE HASH OF CHARS

// create a function to loop through string letters, then icrement hash value for each occurence of letter
// compare the two hash objects returned from running function on both strings
let findPermWithHash = (str1, str2) => {
  let strArray1 = str1.split("")
  let strArray2 = str2.split("")
  
  let hashF = (str) => {
    let charHash = {
      a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0
    }
    for (letter of str) {
      charHash[letter] += 1
    }
    return JSON.stringify(charHash)
  }
  if (hashF(strArray1) === hashF(strArray2)) {
    console.log("true")
    return true
  } else {
    console.log("false")
    return false
  }
}

let str1 = "ab cde"
let str2 = "edc ba"

findPermWithHash(str1, str2);

// WHAT DID WE LEARN HERE?
// A quick and easy way to compare objects or arrays is to use JSON.stringify, which then just compares the strings

// 1.4
// Write a method to replace all spaces in a string with '%20'

