require("dotenv").config();

module.exports = {
  engine: "react-typescript",
  key: process.env.FLAYYER_KEY,
  deck: "{{ name }}",
};
