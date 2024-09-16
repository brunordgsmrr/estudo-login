const bcrypt = require("bcryptjs");
const pool = require("../config/db");
const jwt = require("jsonwebtoken");

// Simulação de banco de dados
const register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
            [username, hashedPassword]
        );

        res.status(201).json({ message: "Usuário registrado com sucesso", user: result.rows[0] });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Erro ao registrar usuário" });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        const user = result.rows[0];

        if (!user) return res.status(400).json({ message: "Usuário não encontrado" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: "Senha incorreta" });

        // Gerar token JWT
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(200).json({ message: "Login realizado com sucesso", token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro ao fazer login!" });
    }
};

module.exports = { register, login };
