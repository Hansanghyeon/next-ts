const path = require('path');
const resolve = (arg) => path.resolve(__dirname, arg);
const CracoAlias = require('craco-alias');

module.exports = function () {
  return {
    babel: {
      plugins: [],
    },
    jest: {
      configure: {
        moduleNameMapper: {
          '^@/(.*)$': '<rootDir>/src/$1',
        },
      },
    },
    plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: 'tsconfig',
          baseUrl: './',
          tsConfigPath: resolve('tsconfig.paths.json'),
        },
      },
    ],
  };
};
