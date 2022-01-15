const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Post = mongoose.model('Post');
const User = mongoose.model('User');

router.get('/user/:id', requireLogin, (req, res) => {
  User.findOne({ id: req.params.id })
    .select('-password') // get all fields except password
    .then(user => {
      Post.find({ postedBy: req.params._id })
        .populate("postedBy", "_id name")
        .exec((err, posts) => {
          if (err) {
            return res.status(422).json({ error: err })
          }
          res.json({ user, posts })
        })
    })
    .catch(err => {
      res.status(404).json({ error: "User not found" })
    })
})

module.exports = router