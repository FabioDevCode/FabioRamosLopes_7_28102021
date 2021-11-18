const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js');
const fs = require('fs');
const db = require('../models');

const User = db.user;
const Initial = db.sequelize;

exports.signup = (req, res) => {
    Initial.sync()

    const emailCrypt = cryptojs.HmacSHA256(req.body.email, `${process.env.CRPT_EMAIL}`).toString(cryptojs.enc.Base64);
    
    User.findOne({ where: { email: emailCrypt }})
    .then(user => {
        if (user) {
            return res.status(404).json({ error: "Cet email est déjà utilisé"})
        }
        bcrypt.hash(req.body.password, 10)
        .then((hashedPassword)=> {
            const newUser = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: emailCrypt,
                password: hashedPassword,
                avatar: '',
                admin: 0
            };
            User.create(newUser)
            .then(() => res.status(201).json({ message : "Nouvel utilisateur créé !"}))
            .catch((error) => res.status(400).json({ error }));
        })
        
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json({ error })
    });
};

exports.login = (req, res) => {

    const emailCrypt = cryptojs.HmacSHA256(req.body.email, `${process.env.CRPT_EMAIL}`).toString(cryptojs.enc.Base64);

    User.findOne({ where: { email: emailCrypt }})
    .then(user => {
        if(!user) {
            return res.status(401).json({ erreur: "E-mail incorrecte" });
        }
        bcrypt.compare(req.body.password, user.password)
        .then((validation) => {
            if (!validation) {
                return res.status(401).json({ erreur: "Mot de passe incorrecte"});
            }
            res.status(200).json({
                userId: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                avatar: user.avatar,
                admin: user.admin,
                token: jwt.sign(
                    { userId: user.id },
                    process.env.KEY_TK,
                    { expiresIn: '12h' }
                )                
            });
        })
        .catch(error => res.status(500).json({ error }))
    })
    .catch(error => res.status(500).json({ error }))
};