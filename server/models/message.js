'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  conversationId: {
    type: String
  },
  sender: {
    type: String
  },
  text: {
    type: String
  }
});

const Message = mongoose.model('Message', schema);

module.exports = Message;
