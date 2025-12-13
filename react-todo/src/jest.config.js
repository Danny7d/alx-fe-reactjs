module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(js|jsx)",
    "<rootDir>/src/**/?(*.)(test|spec).(js|jsx)",
  ],
  collectCoverageFrom: [
    "src/**/*.(js|jsx)",
    "!src/index.js",
    "!src/reportWebVitals.js",
  ],
};
