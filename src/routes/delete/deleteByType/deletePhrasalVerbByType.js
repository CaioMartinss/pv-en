import userModel from "../../../model/model.js";
import express from 'express';
import "../../../db/connection.js";


const routerDeleteGeneral = express.Router();
routerDeleteGeneral.use(express.json());

routerDeleteGeneral.delete('/del/general', async (req, res) => {
    try {
        const general = await userModel.deleteMany({ type: "general" });
        if (!general || general.deletedCount === 0) {
            return res.status(400).json({ error: "Tipo de phrasal verb não encontrado ou já foi deletado" });
        }
        res.json(general); // Ou res.status(200).json({ message: "Phrasal verb deletado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar phrasal verbs" });
    }
});


const routerDeleteRoutines = express.Router();
routerDeleteRoutines.use(express.json());

routerDeleteRoutines.delete('/del/routines', async (req, res) => {
    try {
        const routines = await userModel.deleteMany({ type: "routines" });
        if (!routines || routines.deletedCount === 0) {
            return res.status(400).json({ error: "Tipo de phrasal verb não encontrado ou já foi deletado" });
        }
        res.json(routines); // Ou res.status(200).json({ message: "Phrasal verb deletado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar phrasal verbs" });
    }
});


const routerDeleteSports = express.Router();
routerDeleteSports.use(express.json());

routerDeleteSports.delete('/del/sports', async (req, res) => {
    try {
        const sports = await userModel.deleteMany({ type: "sports" });
        if (!sports || sports.deletedCount === 0) {
            return res.status(400).json({ error: "Tipo de phrasal verb não encontrado ou já foi deletado" });
        }
        res.json(sports); // Ou res.status(200).json({ message: "Phrasal verb deletado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar phrasal verbs" });
    }
});


const routerDeleteShopping = express.Router();
routerDeleteShopping.use(express.json());

routerDeleteShopping.delete('/del/shopping', async (req, res) => {
    try {
        const shopping = await userModel.deleteMany({ type: "shopping" });
        if (!shopping || shopping.deletedCount === 0) {
            return res.status(400).json({ error: "Tipo de phrasal verb não encontrado ou já foi deletado" });
        }
        res.json(shopping); // Ou res.status(200).json({ message: "Phrasal verb deletado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar phrasal verbs" });
    }
});

const routerDeleteCinema = express.Router();
routerDeleteCinema.use(express.json());

routerDeleteCinema.delete('/del/cinema', async (req, res) => {
    try {
        const cinema = await userModel.deleteMany({ type: "cinema" });
        if (!cinema || cinema.deletedCount === 0) {
            return res.status(400).json({ error: "Tipo de phrasal verb não encontrado ou já foi deletado" });
        }
        res.json(cinema); // Ou res.status(200).json({ message: "Phrasal verb deletado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar phrasal verbs" });
    }
});


const routerDeleteDaily = express.Router();
routerDeleteDaily.use(express.json());


routerDeleteDaily.delete('/del/daily', async (req, res) => {
    try {
        const daily = await userModel.deleteMany({ type: "daily" });
        if (!daily || daily.deletedCount === 0) {
            return res.status(400).json({ error: "Tipo de phrasal verb não encontrado ou já foi deletado" });
        }
        res.json(daily); // Ou res.status(200).json({ message: "Phrasal verb deletado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar phrasal verbs" });
    }
});


export {
    routerDeleteGeneral, routerDeleteRoutines, routerDeleteSports, 
    routerDeleteShopping, routerDeleteCinema, routerDeleteDaily};