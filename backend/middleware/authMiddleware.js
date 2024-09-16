const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.status(401).json({ message: "Acesso negado. Token não fornecido"});

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Anexa as informações do usuario ao request
        next();
    } catch (err) {
        res.status(400).json({ message: 'Token inválido'});
    }
};

module.exports = authenticateToken;