import express from 'express';
import '../db/connection.js';
import userModel from '../model/model.js';


const routerUpdate = express.Router();
routerUpdate.use(express.json());

routerUpdate.put("/update/:id", async (req, res) => {
    const { phrasalVerb, meaning, example } = req.body;

    try {
        const phrasalVerb = await userModel.findById(req.params.id);
        if(!phrasalVerb){
            return res.status(404).send('Phrasal verb não encontrado');
        }

        const updatedPhrasalVerb = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPhrasalVerb);
    } catch (error) {
        res.status(500).json({ error: "erro ao atualizar phrasal verb" });
    }
});


export default routerUpdate;