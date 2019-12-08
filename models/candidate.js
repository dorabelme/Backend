const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Candidate = new Schema({
  handle: { type: String, required: true },
  id: { type: Object, required: true }
});

exports.Candidate = mongoose.model("Candidate", Candidate, "qwe");
