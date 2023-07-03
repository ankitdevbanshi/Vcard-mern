let mongoose = require("mongoose");

let schema = new mongoose.Schema({
  clientName: String,
  email: String,
  message: String,
});

let contactModel = mongoose.model("contacts", schema);

module.exports = contactModel;
