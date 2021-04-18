const {config} = require('@flayyer/flayyer-types');
require('dotenv').config();

module.exports = config({
  engine: 'react',
  key: process.env.FLAYYER_KEY,
  deck: '{{ name }}',

  // Optionals
  name: 'My Deck',
  description: 'Created with create-flayyer-app'
});
