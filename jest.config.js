module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      '\\.(ts|tsx|js|jsx)?$': 'babel-jest',
    },
    testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    transformIgnorePatterns: ["<rootDir>/node_modules/(?!@material-ui)"],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
