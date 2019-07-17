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
// findPermWithHash(str1, str2);

// WHAT DID WE LEARN HERE?
// A quick and easy way to compare objects or arrays is to use JSON.stringify, which then just compares the strings

// 1.4
// Write a method to replace all spaces in a string with '%20'

// Input: "Mr John Smith    "
// Output: "Mr%20John%20Smith"

// Simplifications => any space that's longer that two chracters can be dropped from the array
// split string on space
// loop through array, if element in array === " " && that element is the last element in the array, pop it off
// we want to check if last elem in array is a space, if so remove from array => possible recursion?
// otherwise replace the " " with "%20", then join the array and return it
let strReplace = (string) => {
  let charArray = string.split('')
  for (i = charArray.length -1; i >= 0; i--) {
    if (charArray[i] === " " && i === charArray.length-1) {
      charArray.pop()
    } else if (charArray[i] === " ") {
      charArray[i] = "%20"
    }
  }
  // if (charArray[charArray.length-1] === '%20') {charArray.pop()}
  console.log(charArray.join(''));
  return charArray.join('')
}

let input = "Mt John Baker   "
// strReplace(input);


// Q 1.5
// Implement basic string compression method
// If compressed string is not smalled than original string, return original string
// eg aabcccccaaa => a2b1c5a3

// Simplifications => we know that if there are no repeating characters, then our compression will be larger
// Base case "a" => a1 => loop through string and add number every time that character is encountered
// could use a character array, but that would only give us the number of times that character appears
// seems like we need to create an array of arrays that holds values or a hash of objects
// the algo needs to check if the next character in the string is equal to the current character, if it is, add to that hash, if not create new object in array
// think we need to use an array
// ask if string is only letters, no special characters
// then at end just compare lengths of string to see which one to return

// WHAT DID WE LEARN
// BIG DIFFERENCE BETWEEN IF AND ELSE IF
// ELSE IF WILL ALSO EXECUTE IN THE SAME THREAD, SO WILL DO BOTH THE IF AND THE ELSE IF
// IF WILL ONLY EXECUTE ONCE, IT NOT AN 'OR' STATEMENT
// Also the CONCAT method for strings doesn't work with .join() from an array??

let stringComp = (string) => {
// PART 1 => write algo to iterate through string + store char count of each char in string in order
  let arr = [{}];
  [...string].forEach((char, i, array) => {
    if (i === 0) {
      lastObj = arr.pop()
      lastObj[char] = 1
      arr.push(lastObj)
    } 
    if (array[i+1] && char === array[i+1]) {
      lastObj = arr.pop()
      lastObj[char] += 1
      arr.push(lastObj)
    } 
    if (array[i+1] && char != array[i+1]) {
      let nextObj = {}
      nextObj[array[i+1]] = 1
      arr.push(nextObj)
    }
  })
// PART 2 => loop through array of objects and create a string from keys/values
  let newString = ""
  arr.forEach( obj => {
    newString = newString + Object.keys(obj).join() + Object.values(obj).join()
  });
// PART 3 => check if original string is smaller than compressed string => return smaller of two strings
  if (newString.length >= string.length) {
    console.log(string)
    return string
  } else {
    console.log(newString)
    return newString
  }
}

let stringcomp = "aaaab@@@cccccaa";

stringComp(stringcomp);