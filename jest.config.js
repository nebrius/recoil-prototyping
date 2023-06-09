const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Not sure why we have to duplicate this info, but it's necessary for now
        '^packages/(.*)$': '<rootDir>/packages/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    coveragePathIgnorePatterns: ['/node_modules/'],
}

module.exports = createJestConfig(customJestConfig)
