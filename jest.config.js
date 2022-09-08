/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Not sure why we have to duplicate this info, but it's necessary for now
        '^components/(.*)$': '<rootDir>/src/components/$1',
        '^pages/(.*)$': '<rootDir>/src/pages/$1',
        '^server/(.*)$': '<rootDir>/src/server/$1',
        '^state/(.*)$': '<rootDir>/src/state/$1',
        '^test/(.*)$': '<rootDir>/src/test/$1',
        '^types/(.*)$': '<rootDir>/src/types/$1',
        '^utils$': '<rootDir>/src/utils.ts',
    },
    testEnvironment: 'jest-environment-jsdom',
    coveragePathIgnorePatterns: ['/node_modules/', '**/util.tsx'],
}

module.exports = createJestConfig(customJestConfig)
