const express = require('express');
const multer = require('../database/multerCondig');
const auth = require('../middleware/authControl');
const router = express.Router();

const userCrtl = require('../controllers/userCtrl')
const emailCtrl = require('../middleware/emailControl');
const passwordCtrl = require('../middleware/passwordControl');


router.post('/signup', emailCtrl, passwordCtrl, userCrtl.signup);
router.post('/login', userCrtl.login);
router.put('/:id', auth, multer, userCrtl.modifyUser);
router.delete('/:id', auth, userCrtl.deleteUser);
router.get('/:id', auth, userCrtl.getAUser);
router.get('/', auth, userCrtl.getAllUsers);


module.exports = router;