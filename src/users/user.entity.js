const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  createdAt:{
      type: Date,
  },
  updatedAt:{
      type: Date,
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = { UserSchema, User };
