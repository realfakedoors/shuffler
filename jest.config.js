module.exports = {
  // The root of your source code
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>"],

  preset: "ts-jest",

  // Jest transformations -- this adds support for TypeScript & importing static assets:
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.css$": "jest-css-modules-transform",
    "^.+\\.(svg|png)$": "jest-transform-stub",
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/test/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
