import express from 'express';
import './src/db/connection.js'

import routerInsert from './src/routes/insert.js';
import routerDelete from './src/routes/delete.js';
import routerList from './src/routes/list.js';
import routerUpdate from './src/routes/update.js';

const app = express();
app.use(express.json());

app.use("/", routerInsert);
app.use("/", routerDelete);
app.use("/", routerUpdate);
app.use("/", routerList);






app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
