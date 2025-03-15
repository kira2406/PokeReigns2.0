module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["text", "html", "lcov"],
    collectCoverageFrom: [
      "src/**/*.js",
      "!src/**/*.test.js"
    ],
  };
  