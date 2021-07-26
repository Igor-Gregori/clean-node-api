export default {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  modulePathIgnorePatterns: ['protocols', 'helpers', 'errors'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: { '.+\\.ts$': 'ts-jest' }
}
