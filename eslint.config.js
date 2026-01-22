const ultraMegaConfig = require('eslint-config-ultra-mega');

module.exports = [
  ...ultraMegaConfig,
  {
    languageOptions: {
      globals: {
        module: 'false',
        process: 'false',
        require: 'false',
      },
    },
  },
];
