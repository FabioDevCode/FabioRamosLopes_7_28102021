const express = require('express');
const multer = require('../database/multerCondig');
const auth = require('../middleware/authControl');
const router = express.Router();

const postCtrl = require('../controllers/postCtrl');
// const cmntCtrl = require('../controllers/cmntCtrl');


// Routes à créer pour les POSTS

router.post('/', auth, multer, postCtrl.createPost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, multer, postCtrl.deletePost);              
router.get('/', auth, postCtrl.getAllPosts);
router.get('/:id', auth, postCtrl.getOnePost);

// Routes à créer pour les COMMENTAIRES

router.post('/:id/comments', auth);                    // Créer un commentaire
router.put('/:id/comments/:id', auth);                 // Modifier un commentaire
router.delete('/:id/comments/:id', auth)               // Supprimer  un commentaire
router.get('/:id/comments', auth);                     // Voir tous les commentaires (avec la route du post associés)

module.exports = router;