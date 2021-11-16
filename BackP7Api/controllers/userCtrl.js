const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js');
const fs = require('fs');
const db = require('../models');

const User = db.user;

exports.signup = (req, res) => {
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





    // 
    // .then((hashedPassword)=> {

    //     let UserToCreate = {
    //         firstname: req.body.firstname,
    //         lastname: req.body.lastname,
    //         email: emailCrypt,
    //         password: hashedPassword,
    //         avatar: '',
    //         admin: 0
    //     }

    //     .then(() => {
    //         console.log('La base de données de Groupomania à bien été synchronisée')

    //         UserSS.create(UserToCreate)

    //         .then(() => res.status(201).json({ message : "Nouvel utilisateur créé !"}))
    //         .catch((error) => res.status(400).json({ error }));
    //     })
    // })
    // .catch((error) => {
    //     console.log(error)
    //     res.status(500).json({ error })
    // });
};