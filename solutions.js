//1. Difference between a parameter and an argument:
// A parameter is what a function takes in (generally) when it is declared or defined.
// An argument is the specific data that is passed when the function is called.

//2. Within a function, what is the difference between return and console.log?
// Console.log logs the data or output of something to the console which isn't necessarily visible on the browser.
// Return causes the outcome of the function to be rendered to the browser or screen.

//3. Palindrome

const checkPalindrome = (string) => {
  const word = string.toLowerCase();
  const reverseStr = word.split("").reverse().join("");
  return word === reverseStr;

};


console.log(checkPalindrome("Racecar"))

//4. Sum Array

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

  }
  // return sum;
  console.log(sum)
}
sumArray([1, 2, 3])

//5. Prime Numbers
//STEP ONE
const checkPrime = (num) => {
  if(num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrime(4))
//STEP TWO
const printPrimes = (num) => {
  let arr = [2];
  for (let i = 3; i <= num; i += 2) {
    if(checkPrime(i)) {
      arr.push(i)
    }
  }
  console.log(arr)
}
printPrimes(97)
