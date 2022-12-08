
const reverseString = (word) => {
  return word.split("").reverse().join("");
}

const isPalindrome = (word) => {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}


/* 
  Add your pseudocode here
  create a new function
  split the input word into a sring
  reverse the slit word 
  join the word and compare it with the input 
*/

/*
  Add written explanation of your solution here
  create a function that will split and convert the input word then
  join the words and equate it to the input
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
