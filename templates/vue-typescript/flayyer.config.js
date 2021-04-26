// Created with create-flayyer-app@{{ replace-create-version }}

const {config} = require('@flayyer/flayyer-types');
require('dotenv').config();

module.exports = config({
  engine: 'vue-typescript',
  key: process.env.FLAYYER_KEY,
  deck: '{{ replace-slug }}',

  // Optionals
  name: '{{ replace-title }}',
  description: 'Created with create-flayyer-app'
});
