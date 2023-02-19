'use strict';

const express = require('express');
const router = express.Router();
const Conversation = require('./../models/conversation');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Wohoo' } });
});

// new conversation
router.post('/', async (req, res, next) => {
  const newConversation = new Conversation({
    contacts: [req.body.senderId, req.body.receiverId]
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get conversation of a user

router.get('/:userId', async (req, res, next) => {
  try {
    const conversation = await Conversation.find({
      contacts: { $in: [req.params.userId] }
    });
    // res.status(200).json(conversation);
    res.json({ type: 'success', data: { title: '' } });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
