module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "../",
  roots: ["<rootDir>/test/unit"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
  testRegex: ".*\\.spec\\.ts$",
  testEnvironment: "node",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^test/(.*)$": "<rootDir>/test/$1",
  },
}
