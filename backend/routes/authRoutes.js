const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");

// rotas de autenticação
router.post("/register", register);
router.post("/login", login);

// Rota protegida
router.get("/profile", authenticateToken, (req, res) => {
    res.json({ message: `Bem-vindo, ${req.user.username}`, user: req.user });
});

module.exports = router;
