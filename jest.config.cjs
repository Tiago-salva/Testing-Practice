// jest.config.cjs
module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
