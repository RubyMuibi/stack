const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const stackShema = new Schema({
  stack: {
    type: String,
    required: true,
  }, //rum name (project or app name)

  title: String, // ( short title of the app )

  description: String, // description of the app

  dev: String, // developer

  image: {
    type: String,
    //image url
  },

  url: {
    type: String,
  }, //experience url or take a Rum shot

  source: {
    type: String,
  }, //github origin url
});

const Stack = model("stacks", stackShema);
module.exports = Stack;
