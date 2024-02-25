import express from 'express';
import './src/db/connection.js'
import cors from 'cors';

import routerInsert from './src/routes/insert.js';
import routerDelete from './src/routes/delete/delete.js';
import routerList from './src/routes/list/list.js';
import routerUpdate from './src/routes/update.js';

import { routerListRoutines, routerListSports, routerListGeneral, routerListShopping} from './src/routes/list/listTypesPhrasalVerbs/listGeneralTypes.js';
import {routerDeleteGeneral, routerDeleteShopping, routerDeleteRoutines, routerDeleteDaily, routerDeleteSports} from './src/routes/delete/deleteByType/deletePhrasalVerbByType.js';


const app = express();
app.use(express.json());

app.use(cors());

app.use("/", routerInsert);
app.use("/", routerDelete);
app.use("/", routerUpdate);
app.use("/", routerList);
app.use("/", routerListRoutines, routerListSports, routerListGeneral, routerListShopping);
app.use("/", routerDeleteGeneral, routerDeleteShopping, routerDeleteRoutines, routerDeleteDaily, routerDeleteSports);




app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
