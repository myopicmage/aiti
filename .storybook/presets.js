const path = require('path');

module.exports = [ 
  '@storybook/addon-docs/react/preset', 
  {
    name: '@storybook/preset-typescript',
    options: {
      include: [ path.resolve(__dirname, '../src') ]
    }
  }
];