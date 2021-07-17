let router = require('express').Router();
let { Post, User, Comment } = require('../../models');
let withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  console.log(req.body);
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router; 
