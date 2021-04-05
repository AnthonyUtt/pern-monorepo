const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@workspace/constants': path.resolve(__dirname, './packages/constants/src'),
    '^@workspace/common': path.resolve(__dirname, './packages/common/src')
  }
};