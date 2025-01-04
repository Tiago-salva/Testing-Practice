const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("../src/functions.js");

test("Capitalize first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

// Calculator tests
test("Sum 2 numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtract 2 numbers", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("Divide 2 numbers", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test("Multiply 2 numbers", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});
// Calculator tests

test("Caesar Cypher", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Array properties", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
