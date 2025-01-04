// Returns the string with the first character capitalize
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Returns the string reversed
function reverseString(string) {}

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
  var splittedSring = string.split("");
  var encryptString = [];
  splittedSring.forEach(function (character) {
    // If it's a letter, encrypt
    if (/[a-zA-Z]/.test(character)) {
      shiftLetter(character, shiftFactor);
    } else {
      encryptString.push(character);
    }
  });

  console.log(encryptString.join(""));

  function shiftLetter(letter, shiftFactor) {
    // prettier-ignore
    var plainTextAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var cipherTextAlphabet = [];
    // Build the shift Alphabet
    plainTextAlphabet.forEach(function (letter) {
      var newIndex = plainTextAlphabet.indexOf(letter) - shiftFactor;
      if (newIndex < 0) {
        newIndex = plainTextAlphabet.length - newIndex;
      }
      cipherTextAlphabet.splice(newIndex, 0, letter);
    });

    var letterLowerCase = letter.toLowerCase();
    var letterIndex = plainTextAlphabet.indexOf(letterLowerCase);
    var cipherLetter = letter === letter.toUpperCase() ? cipherTextAlphabet[letterIndex].toUpperCase() : cipherTextAlphabet[letterIndex];
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