const mongoose = require('mongoose');
const TimestampableSchema = require('./Timestampable');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ['backlogged', 'started', 'waiting for confirmation', 'done'],
      default: 'backlogged'
    },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ...TimestampableSchema.obj
});

module.exports = mongoose.model('Taks', TaskSchema);
