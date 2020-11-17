require("dotenv").config();

module.exports = {
  engine: "vue-typescript",
  key: process.env.FLAYYER_KEY,
  deck: "{{ name }}",
};
