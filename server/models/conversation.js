'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  contacts: {
    type: Array
  }
});

const Conversation = mongoose.model('Conversation', schema);

module.exports = Conversation;
