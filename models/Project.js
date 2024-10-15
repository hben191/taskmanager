const mongoose = require('mongoose');
const TimestampableSchema = require('./Timestampable');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  ...TimestampableSchema.obj
});

module.exports = mongoose.model('Project', ProjectSchema);
