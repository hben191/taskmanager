const mongoose = require('mongoose');

const TimestampableSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { _id: false });

module.exports = TimestampableSchema;
