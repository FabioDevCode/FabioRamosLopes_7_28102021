const db = require('../models');

const Comment = db.comment;

exports.createComment = (req, res, next) => {
    const newComment = {
        comment: req.body.comment,
        postId: req.body.postId,
        userId: req.body.userId,
        createdAt: req.body.createdAt,
    }
    Comment.create(newComment)
    .then(() => res.status(200).json({ message : "Commentaire créé !"}))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllComments = (req, res, next) => {
    Comment.findAll({ where: {postId: req.params.id}, order: [['id', 'DESC']]})
    .then((comments) => res.status(200).json(comments))
    .catch((error) => res.status(400).json(error))
};

exports.deleteComment = (req, res, next) => {
    Comment.destroy({where: { id: req.params.id }})
    .then(() => res.status(200).json({ message: "Le commentaire à bien été supprimé."}))
    .catch((error) => res.status(500).json(error))
};

exports.modifyComment = (req, res, next) => {
    Comment.findOne({ where: { id: req.params.id}})
    .then(() => {
        Comment.update({ comment: req.body.comment}, { where: { id: req.params.id }})
        .then(() => res.status(200).json({ message : "Le commentaire à bien été modifié."}))
        .catch((error) => res.status(404).json(error))
    })
    .catch((error) => res.status(500).json(error))
};