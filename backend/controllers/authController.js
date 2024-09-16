const bcrypt = require('bcryptjs');

// Simulação de banco de dados
const users = []

const register = async (req, res) => {
    const {username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({username, password: hashedPassword });
    res.status(201).json({ message: 'Usuário registrado com sucesso'});
};

const login = async (req, res) => {
    const {username, password} = req.body;
    const user = users.find(u => u.username === username);

    if (!user) return res.status(400).json({message: 'Usuário não encontrado'});

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) return res.status(400).json({message: 'Senha incorreta'});

    res.status(200).json({message: "Login realizado com sucesso"})
}

module.exports = { register, login };