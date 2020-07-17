const path = require('path');
const resolve = (arg) => path.resolve(__dirname, arg);

module.exports = function () {
  return {
    babel: {
      plugins: [],
    },
    webpack: {
      alias: {
        '@': resolve('src'),
        '@atom': resolve('src/components/atoms'),
        '@molecule': resolve('src/components/molecules'),
        '@organism': resolve('src/components/organisms'),
        '@template': resolve('src/components/templates'),
      },
    },
    jest: {
      configure: {
        moduleNameMapper: {
          '^@/(.*)$': '<rootDir>/src/$1',
        },
      },
    },
  };
};
