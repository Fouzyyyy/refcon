module.exports = {
  verbose: false,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      lines: 90,
      functions: 90,
    },
  },
  errorOnDeprecated: true,
};
