const express = require('express');
const multer = require('../database/multerCondig');
const auth = require('../middleware/authControl');
const router = express.Router();

// controller pour user
// middleware pour mdp

//Routes à créer
router.post('/signup', );     // Créer un compte utilisateur
router.post('/login', );      // Se connecter 
router.put('/:id', auth, multer);         // Modifier : Nom, Prénom, Image de son compte
router.delete('/:id', auth);      // Supprimer son compte
router.get('/:id', auth);         // Voir le Profil d'un utilisatuer
router.get('/', auth);            // Voir tout les utilisateurs


module.exports = router;