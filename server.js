import express from 'express';
import './src/db/connection.js'

const app = express();


app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
