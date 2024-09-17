require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');


// Middleware para parse de JSON
app.use(express.json())
app.use(cors({
    origin: '*'
}));

// rotas
app.use('/auth', authRoutes);

// Servidor rodando
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})