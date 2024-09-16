const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// rotas de autenticação
router.post('/register', register);
router.post('/login', login);

module.exports = router;