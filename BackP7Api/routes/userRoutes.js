const express = require('express');
const multer = require('../database/multerCondig');
const auth = require('../middleware/authControl');
const router = express.Router();

const userCrtl = require('../controllers/userCtrl')
const emailCtrl = require('../middleware/emailControl');
const passwordCtrl = require('../middleware/passwordControl');


router.post('/signup', emailCtrl, passwordCtrl, userCrtl.signup); // fait
router.post('/login', userCrtl.login); // Fait
router.put('/:id', auth, multer, userCrtl.modifyUser); // Fait
router.delete('/:id', auth, userCrtl.deleteUser); // Supprimer son compte
router.get('/:id', auth); // Voir le Profil d'un utilisatuer
router.get('/', auth, userCrtl.getAllUsers); // Voir tout les utilisateurs


module.exports = router;