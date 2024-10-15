const mongoose = require('mongoose');
const TimestampableSchema = require('./Timestampable');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  ...TimestampableSchema.obj  // Spread the TimestampSchema properties here
});

module.exports = mongoose.model('User', UserSchema);
