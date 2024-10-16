export default {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|svg)$": "identity-obj-proxy",
  },
  collectCoverage: true, 
  coverageDirectory: "coverage", 
  coverageReporters: ["json", "lcov", "text", "clover"], 
  collectCoverageFrom: [
    "src/**/*.{js,jsx}", 
    "!**/node_modules/**", 
    "!src/main.jsx",
    "!**/dist/**",
  ]
};
