const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    
    minlength: 1
  },
  roll: {
    type: String,
    required: true,
    unique: true,
    minlength: 1
  },
  preference: {
    type: String,
    required: true,
    minlength: 1
  },
  type: {
    type: String,
    required: true,
    minlength: 1
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;