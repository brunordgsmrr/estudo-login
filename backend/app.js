require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');


// Middleware para parse de JSON
app.use(express.json())

// rotas
app.use('/auth', authRoutes);

// Servidor rodando
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})