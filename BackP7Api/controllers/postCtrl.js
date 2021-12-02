const fs = require('fs');
const db = require('../models');

const Post = db.post;


exports.createPost = (req, res, next) => {

    if(req.file === undefined) {
        const newPost = {
            userId: req.body.userId,
            message: req.body.message,
            media: "",
            date: req.body.date,
        };
    
        Post.create(newPost)
        .then(() => res.status(200).json({ message : "Nouvelle publication créée !"}))
        .catch((error) => res.status(400).json({ error }));
    } else {
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
};

exports.getAllPosts = (req, res, next) => {
    Post.findAll({order: [["id", "DESC"]]})
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json(error))
};

exports.deletePost = (req, res, next) => {
    Post.findOne({ where: { id: req.params.id }})
    .then((post) => {
        let filename = post.media.split('/images/')[1];
        fs.unlink("images/" + filename, () => {
            Post.destroy({ where: { id: req.params.id }})
            .then(() => res.status(200).json({ message: "La publication à bien été supprimée."}))
            .catch((error) => res.status(400).json(error))
        });
    })
    .catch((error) => res.status(500).json(error))
};