const express = require('express');
const multer = require('../database/multerCondig');
const auth = require('../middleware/authControl');
const router = express.Router();

const userCrtl = require('../controllers/userCtrl')
const emailCtrl = require('../middleware/emailControl');
const passwordCtrl = require('../middleware/passwordControl');


router.post('/signup', emailCtrl, passwordCtrl, userCrtl.signup); // Créer un compte utilisateur
router.post('/login', userCrtl.login); // Se connecter 
router.put('/:id', auth, multer); // Modifier : Nom, Prénom, Image de son compte
router.delete('/:id', auth); // Supprimer son compte
router.get('/:id', auth); // Voir le Profil d'un utilisatuer
router.get('/', auth); // Voir tout les utilisateurs


module.exports = router;