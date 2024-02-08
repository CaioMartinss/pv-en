import userModel from "../../../model/model.js";
import express from 'express';
import "../../../db/connection.js";

const routerListGeneral = express.Router();
routerListGeneral.use(express.json());

routerListGeneral.get('/general', async (req, res) => {
    try {

        const { type } = req.query;
        if (!type || type.trim() === '') {
            res.status(400).json({ error: "Tipo de phrasal verb não informado"});
        }
        
        const phrasalVerbType = await userModel.find({ type });
        res.json(phrasalVerbType);
    } catch (error) {
        res.status(500).json({ error: "erro ao listar phrasal verbs" });

    }
});

export default routerListGeneral;
