import express from 'express';
import '../../db/connection.js';
import userModel from '../../model/model.js';

const routerList = express.Router();
routerList.use(express.json());


routerList.get('/list', async (req, res) => {   
    try {
        const phrasalVerb = await userModel.find({});
        res.json(phrasalVerb);
    } catch (error) {
        res.status(500).json({ error: "erro ao listar phrasal verbs" });
    }
});

export default routerList;