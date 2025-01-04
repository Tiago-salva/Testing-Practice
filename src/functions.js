// Returns the string with the first character capitalize
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Returns the string reversed
function reverseString(string) {
  return string.split("").reverse().join("");
}

// A calculator object that contains functions for basic operations
const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

// It takes a string and a shift factor and returns it with each character “shifted”
function caesarCipher(string, shiftFactor) {
  // prettier-ignore
  const plainTextAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const cipherTextAlphabet = [];
  // Build the shift Alphabet
  plainTextAlphabet.forEach((letter) => {
    let newIndex = plainTextAlphabet.indexOf(letter) - shiftFactor;
    if (newIndex < 0) {
      newIndex = plainTextAlphabet.length - newIndex;
    }
    // Add the letter in the cipher alphabet
    cipherTextAlphabet.splice(newIndex, 0, letter);
  });

  // Encrypt the string
  const splittedSring = string.split("");
  const encryptString = [];
  splittedSring.forEach((character) => {
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
    const letterLowerCase = letter.toLowerCase();
    const letterIndex = plainTextAlphabet.indexOf(letterLowerCase);
    const cipherLetter =
      // The original letter was upperCase?
      letter === letter.toUpperCase()
        ? cipherTextAlphabet[letterIndex].toUpperCase() // Then add the encrypt letter in upperCase
        : cipherTextAlphabet[letterIndex]; // Add it normaly
    encryptString.push(cipherLetter);
  }
}

// Takes an array of numbers and returns an object with "average, min, max, and length" properties
function analyzeArray(array) {
  const properties = {
    average: array.reduce((sum, num) => sum + num, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return properties;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
