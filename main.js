// // 1. Define a function called `oldestPerson` that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.

function oldestPerson(array) {
  var high = 0;
  var oldest = "";
  //Start at 0 index, iterate until the array length, iterate by 1
  for (var i = 0; i < p.length; i++) {
    //checking high
    if (p[i].age > high) {
      high = p[i].age;
      oldest = p[i].name;
    }
  }
  return oldest;
}

var p = [
{ name : "Billy", age : 5 },
{ name : "Lucy", age : 31 },
{ name : "Jonny", age : 111 },
{ name : "Wolfgang", age : 78 },
{ name : "Robert", age : 23 }
];

console.log(oldestPerson(p));

// // 2. Define a function called `longestWord` that takes a string and returns the longest word in the string.

function longestWord(string) {
  stringCopy= string.split(" ");

  var longest = 0;
  var index;
  for (var i = 0; i < stringCopy.length; i++) {
    if (stringCopy[i].length > longest){
      longest = stringCopy[i].length;
      index = i;
    }
  }
  return stringCopy[index];
}
console.log(longestWord("The brown fox jumped over, the moon."));

// 3. Refactor the `longestWord` function so that it ignores punctuation.

function refactor(string) {
  var emptyString = string;
  var noPunctuation = emptyString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var finalString = noPunctuation;
      return finalString;
}
console.log(refactor("The brown! fox! jumped!! over, the; moon."));



// // 4. Define a function called `factorial` that takes a random number as an argument and then returns the factorial of that given number.

function factorial(num1) {
  var start = num1 - 1;
  var total = num1;
  for (i = num1; i > 1; i-- ){
    total *= start;
    start--;
  }
  return total;
}
console.log(factorial(4));




// // . **Bonus**: Write a function called `palindrome` that takes a string as an argument and returns the string in reversed order. Return true if the string is the same as the reversed string, otherwise return false.

