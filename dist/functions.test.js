"use strict";

var _functionsJs = require("./functions.js");

(0, _functionsJs.analyzeArray)([1, 8, 3, 4, 2, 6]);

test("capitalize", function () {
  expect((0, _functionsJs.capitalize)("hello")).toBe("Hello");
});