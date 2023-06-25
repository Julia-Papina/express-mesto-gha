const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  hobby: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
});

module.exports = mongoose.model('user', userSchema);
