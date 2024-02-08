import express from 'express';
import './src/db/connection.js'
import cors from 'cors';

import routerInsert from './src/routes/insert.js';
import routerDelete from './src/routes/delete.js';
import routerList from './src/routes/list/list.js';
import routerUpdate from './src/routes/update.js';

import routerListGeneral from './src/routes/list/listTypesPhrasalVerbs/listGeneral.js';
import routerListRoutines from './src/routes/list/listTypesPhrasalVerbs/listRoutines.js';


const app = express();
app.use(express.json());

app.use(cors());

app.use("/", routerInsert);
app.use("/", routerDelete);
app.use("/", routerUpdate);
app.use("/", routerList);
app.use("/", routerListGeneral);
app.use("/", routerListRoutines);




app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
