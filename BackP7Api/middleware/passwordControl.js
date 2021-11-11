const passwordSch = require('../models/passwordModel');

module.exports = (req, res, next) => {
    if (!passwordSch.validate(req.body.password)) {
        res
        .status(400)
        .json({ error: 'Le MDP doit contenir 8 caractères au minimum, avec 1 majuscule, 1 minuscule et 1 chiffre.' });
    } else {
        next();
    }
};