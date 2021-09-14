/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = (num1, num2) => (num1 === num2 ? (num1 + num2) * 3 : num1 + num2);

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const isFifty = (num1, num2) =>
  num1 === 50 || num2 === 50 || num1 + num2 === 50;

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeChar = (pos, str) => str.slice(0, pos) + str.slice(pos + 1);

/*
4)
 Create a function to find the largest of three given integers.
*/
const findLargestInt = (...args) => args.sort((a, b) => a - b)[args.length - 1];

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const checkRange = (a, b) =>
  (a >= 40 && a <= 60) ||
  (a >= 70 && a <= 100) ||
  (b >= 40 && b <= 60) ||
  (b >= 70 && b <= 100);

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
const createCopies = (str, n) => {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += str + " ";
  }
  return newStr;
};

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const startsWith = (str) => str.startsWith("Los") || str.startsWith("New");

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const totalSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const includesNum = (arr) => arr.includes(1) || arr.includes(3);

/*
10) Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const notIncludes = (arr) => !includesNum(arr);

/*
11) Create a function to find the longest string from a given array of strings.
 */
const findLongestStr = (arr) =>
  arr
    .map((str) => ({ length: str.length, str }))
    .sort((a, b) => a.length - b.length)[arr.length - 1].str;

/* 
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
const angleType = (angle) =>
  angle < 90
    ? "acute"
    : angle === 90
    ? "right"
    : angle < 180
    ? "obtuse"
    : "straight";

/**
13) Create a function to find the index of the greatest element of a given array of integers
 */
const findIndexOfLargest = (arr) => {
  const temp = [...arr];
  const sorted = temp.sort((a, b) => a - b);
  return arr.indexOf(sorted[arr.length - 1]);
};

/**
 14) Create a function to get the largest even number from an array of integers.
 */
const findLargestEven = (arr) => {
  const evenNums = arr.filter((n) => n % 2 === 0);
  return evenNums.sort((a, b) => a - b)[evenNums.length - 1];
};

/**
 15) Create a function to check from two given integers, whether one is positive and another one is negative.
 */
const checkSign = (a, b) => (a < 0 && b > 0) || (a > 0 && b < 0);

/**
16) Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.
 */
const convertCase = (str) =>
  str.length < 3
    ? str.toUpperCase()
    : str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase();

/**
17) Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
 */
const checkSumRange = (a, b) => (a + b > 50 && a + b < 80 ? 65 : 80);

/*
18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
const numToStringByFactor = (num) => {
  let str = "";
  if (num % 3 === 0) str += "Diego";
  if (num % 5 === 0) str += "Riccardo";
  if (num % 7 === 0) str += "Stefano";

  return str;
};

/**
19) Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
 */
const getAcronim = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");


/*-----------------------Extra Exercises---------------------------------- */

/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
const maxChar = (str) => {
    let max = 0;
    let maxChar = "";
    str.split("").forEach((char) => {
      if (str.split(char).length > max) {
        max = str.split(char).length;
        maxChar = char;
      }
    });
    return maxChar;
  };
  
  /* 2) ANAGRAMS
  
  Check to see if two provided strings are anagrams of each other.
  One string is an anagram of another if it uses the same characters
  in the same quantity. Only consider characters, not spaces
  or punctuation.  Consider capital letters to be the same as lower case
  
  --- Examples
    anagrams('rail safety', 'fairy tales') --> True
    anagrams('RAIL! SAFETY!', 'fairy tales') --> True
    anagrams('Hi there', 'Bye there') --> False
  */
  const isAnagram = (str1, str2) =>
    str1.split("").sort().join("") === str2.split("").sort().join("");
  
  /* 3) ANAGRAMS 2
  
  Given a word and a list of possible anagrams, select the correct sublist.
  
  --- Examples 
  
      "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
  */
  const anagrams2 = (str, arr) => {
    const anagrams = [];
    arr.forEach((word) => {
      if (isAnagram(str, word)) {
        anagrams.push(word);
      }
    });
    return anagrams;
  };
  
  /* 4) PALINDROME
  
  Given a string, return true if the string is a palindrome
  or false if it is not.  Palindromes are strings that
  form the same word if it is reversed. Do include spaces
  and punctuation in determining if the string is a palindrome.
  
  --- Examples:
  
      palindrome("abba") === true
      palindrome("abcdefg") === false
   */
  const isPolindrome = (str) =>
    str.split(" ").join("") ===
    str.split(" ").join("").split("").reverse().join("");
  
  /* 5) REVERSE INT
  
  Given an integer, return an integer that is the reverse
  ordering of numbers.
  
  --- Examples
  
      reverseInt(15) === 51
      reverseInt(981) === 189
      reverseInt(500) === 5
      reverseInt(-15) === -51
      reverseInt(-90) === -9
   */
  const reverseInt = (n) =>
    parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);
  
  /* 6) STEPS
  
  Write a function that accepts a positive number N.
  The function should console log a step shape
  with N levels using the # character.  Make sure the
  step has spaces on the right hand side!
  
  --- Examples
  
      steps(2)
          '# '
          '##'
      steps(3)
          '#  '
          '## '
          '###'
      steps(4)
          '#   '
          '##  '
          '### '
          '####' */
  
  const steps = (n) => {
    for (let i = 0; i < n; i++) {
      let step = " ";
  
      for (let j = 0; j < n; j++) {
        if (j <= i) {
          step += "#";
        } else {
          step += " ";
        }
      }
      console.log(step);
    }
  };
  steps(4);
  
  /* 7) REVERSE STRING
  
  Given a string, return a new string with the reversed
  order of characters
  
  --- Examples
  
      reverse('apple') === 'leppa'
      reverse('hello') === 'olleh'
      reverse('Greetings!') === '!sgniteerG'
   */
  const reverseStr = (str) => str.split("").reverse().join("");
  
  /* 8) CHUNK
  
  Given an array and chunk size, divide the array into many subarrays
  where each subarray is of length size
  
  --- Examples
  
      chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
      chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
      chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
      chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
      chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
  */
  const chunk = (arr, n) => {
    const chunks = [];
    let i = 0;
    let length = arr.length;
  
    while (i < length) {
      chunks.push(arr.slice(i, (i += n)));
    }
    return chunks;
  };
  console.log(chunk([1, 2, 3, 4], 2));
  
  /* 9) PYRAMID
  
  Write a function that accepts a positive number N.
  The function should console log a pyramid shape
  with N levels using the # character.  Make sure the
  pyramid has spaces on both the left and right hand sides
  
  --- Examples
  
      pyramid(1)
          '#'
      pyramid(2)
          ' # '
          '###'
      pyramid(3)
          '  #  '
          ' ### '
          '#####' */
  const pyramid = (height) => {
    for (let i = 0; i < height; i++) {
      // 2n+1
      let stars = "*".repeat(2 * i + 1);
      let spacesBefore = " ".repeat(height - i - 1);
      console.log(spacesBefore + stars);
    }
  };
  pyramid(4);
  
  /* 10) SPYRAL MATRIX
  
  Write a function that accepts an integer N
  and returns a NxN spiral matrix.
  
  --- Examples
  
      matrix(2)
          [[1, 2],
          [4, 3]]
      matrix(3)
          [[1, 2, 3],
          [8, 9, 4],
          [7, 6, 5]]
      matrix(4)
          [[1, 2, 3, 4],
          [12, 13, 14, 5],
          [11, 16, 15, 6],
          [10,  9,  8, 7]]
  
  */
  const matrix = (n) => {
    const results = [];
    for (let i = 0; i < n; i++) {
      results.push([]);
    }
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
      // Top row
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
      // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
      // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
      // start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
    return results;
  };
  console.log(matrix(4));