// Returns the string with the first character capitalize
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Returns the string reversed
function reverseString(string) {
  return string.split("").reverse().join("");
}

// A calculator object that contains functions for basic operations
var calculator = {
  add: function add(a, b) {
    return a + b;
  },

  subtract: function subtract(a, b) {
    return a - b;
  },

  divide: function divide(a, b) {
    return a / b;
  },

  multiply: function multiply(a, b) {
    return a * b;
  }
};

// It takes a string and a shift factor and returns it with each character “shifted”
function caesarCipher(string, shiftFactor) {
  // prettier-ignore
  var plainTextAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var cipherTextAlphabet = [];
  // Build the shift Alphabet
  plainTextAlphabet.forEach(function (letter) {
    var newIndex = plainTextAlphabet.indexOf(letter) - shiftFactor;
    if (newIndex < 0) {
      newIndex = plainTextAlphabet.length - newIndex;
    }
    // Add the letter in the cipher alphabet
    cipherTextAlphabet.splice(newIndex, 0, letter);
  });

  // Encrypt the string
  var splittedSring = string.split("");
  var encryptString = [];
  splittedSring.forEach(function (character) {
    // If it's a letter, encrypt
    if (/[a-zA-Z]/.test(character)) {
      shiftLetter(character);
    } else {
      encryptString.push(character); // If it's not a letter, do nothing
    }
  });

  // Return the encrypt string
  return encryptString.join("");

  function shiftLetter(letter) {
    // Transform the letter in lowerCase to locate it more easy
    var letterLowerCase = letter.toLowerCase();
    var letterIndex = plainTextAlphabet.indexOf(letterLowerCase);
    var cipherLetter =
    // The original letter was upperCase?
    letter === letter.toUpperCase() ? cipherTextAlphabet[letterIndex].toUpperCase() // Then add the encrypt letter in upperCase
    : cipherTextAlphabet[letterIndex]; // Add it normaly
    encryptString.push(cipherLetter);
  }
}

// Takes an array of numbers and returns an object with "average, min, max, and length" properties
function analyzeArray(array) {
  var properties = {
    average: array.reduce(function (sum, num) {
      return sum + num;
    }, 0) / array.length,
    min: Math.min.apply(Math, _toConsumableArray(array)),
    max: Math.max.apply(Math, _toConsumableArray(array)),
    length: array.length
  };

  return properties;
}

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
  caesarCipher: caesarCipher,
  analyzeArray: analyzeArray
};