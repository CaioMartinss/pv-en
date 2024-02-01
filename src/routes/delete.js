import express from 'express';
import '../db/connection.js';
import userModel from '../model/model.js';


const routerDelete = express.Router();
routerDelete.use(express.json());

routerDelete.delete("/delete/:id", async (req, res) => {
    const { phrasalVerb } = req.body;


    try{
        const phrasalVerb = await userModel.findById(req.params.id);
        if(!phrasalVerb){
            return res.status(404).send('Phrasal verb não encontrado');
        }

        const deletedPhrasalVerb = await userModel.findByIdAndDelete(req.params.id);
        res.json(deletedPhrasalVerb);
    } catch (error) {
        res.status(500).json({ error: "erro ao deletar phrasal verb"  });
    
    }
});


export default routerDelete;