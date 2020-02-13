const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  grants: { type: String, required: true },
  loans: { type: String, required: true },
  rental: {type: String, requried: true},
  rental: {type: String, requried: true},

  ida: { type: String, required: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
