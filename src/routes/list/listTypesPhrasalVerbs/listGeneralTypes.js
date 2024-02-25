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


const routerListRoutines = express.Router();
routerListRoutines.use(express.json());

routerListRoutines.get('/routines', async (req, res) => {
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


const routerListSports = express.Router();
routerListSports.use(express.json());

routerListSports.get('/sports', async (req, res) => {
    try {
        const sports = await userModel.find({ type: "sports" });
        if (!sports) {
            res.status(404).json({ error: "Tipo de phrasal verb não encontrado"});
        }
        res.json(sports);
    } catch (error) {
        res.status(500).json({ error: "erro ao listar phrasal verbs" });

    }
});

const routerListShopping = express.Router();
routerListShopping.use(express.json());

routerListShopping.get('/shopping', async (req, res) => {
    try {
        const shopping = await userModel.find({ type: "shopping" });
        res.json(shopping);
    } catch (error) {
        res.status(500).json({ error: "erro ao listar phrasal verbs" });

    }

});




export { 
    routerListRoutines, routerListSports, 
    routerListGeneral, routerListShopping };

