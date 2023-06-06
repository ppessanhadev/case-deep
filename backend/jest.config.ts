export default {
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.test.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@application(.*)$': '<rootDir>/src/application/$1',
    '^@controllers(.*)$': '<rootDir>/src/application/controllers/$1',
    '^@schemas(.*)$': '<rootDir>/src/shared/schemas/$1',
    '^@domain(.*)$': '<rootDir>/src/domain/$1',
    '^@infra(.*)$': '<rootDir>/src/infra/$1',
    '^@repositories(.*)$': '<rootDir>/src/infra/repositories/$1',
    '^@shared(.*)$': '<rootDir>/src/shared/$1',
    '^@base(.*)$': '<rootDir>/src/base/$1',
    '^@test(.*)$': '<rootDir>/test/$1',
  },
};
