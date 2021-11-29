const fs = require('fs');
const db = require('../models');

const Post = db.post;


exports.createPost = (req, res, next) => {

    const newPost = {
        userId: req.body.userId,
        message: req.body.message,
        media: req.protocol + "://" + req.get("host") + "/images/" + req.file.filename,
        date: req.body.date,
    };

    Post.create(newPost)
    .then(() => res.status(200).json({ message : "Nouvelle publication créée !"}))
    .catch((error) => res.status(400).json({ error }));
}

exports.getAllPosts = (req, res, next) => {
    Post.findAll({order: [["id", "DESC"]]})
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json(error))
}