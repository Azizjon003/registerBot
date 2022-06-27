const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  fullName: String,
  number: String,
  age: Number,
  dasturlashTili: String,
  location: Object,
  univers: String,
  createdAt: { type: Date, default: Date.now() },
  telegramId: String,
  telegramUsername: String,
});

const Bot = mongoose.model("BotUsers", Schema);

module.exports = Bot;
