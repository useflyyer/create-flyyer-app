// Created with create-flayyer-app@{{ create-version }}

const {config} = require('@flayyer/flayyer-types');
require('dotenv').config();

module.exports = config({
  engine: 'react-typescript',
  key: process.env.FLAYYER_KEY,
  deck: '{{ slug }}',

  // Optionals
  name: '{{ title }}',
  description: 'Created with create-flayyer-app'
});
