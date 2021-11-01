const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Post = mongoose.model('Post');

router.get('/allposts', (req, res) => {
  Post.find() // no conditions here so we get all the posts
  .populate("postedBy", "_id name") // to populate the postedBy field, 2nd parameter is to populate the postedBy conditionally
  .then((posts) => {
    res.json({posts})
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/createpost', requireLogin, (req, res) => {
  const { title, body } = req.body
  if (!title || !body) {
    return res.status(422).json({ error: 'Please add all the detais' })
  }
  // console.log(req.user)
  // res.send("ok")

  req.user.password = undefined;

  const post = new Post({
    title: title,
    body: body,
    postedBy: req.user
  })

  post.save().then((result) => {
    res.json({ post: result })
  })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router