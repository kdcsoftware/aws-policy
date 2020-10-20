module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/tests/__helpers'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['src/**/*.js'],
  watchPathIgnorePatterns: [
    '<rootDir>/node_nodules/',
    '<rootDir>/dist/',
    '<rootDir>/coverage/',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
};
