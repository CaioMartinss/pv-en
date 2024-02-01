import express from 'express';
import '../db/connection.js';
import userModel from '../model/model.js';
import verifyFields from '../controller/verifyFields.js';


const routerInsert = express.Router();
routerInsert.use(express.json());



routerInsert.post('/insert', verifyFields, async (req, res) => {
    const { phrasalVerb, meaning, example } = req.body;

    const user = new userModel({ phrasalVerb, meaning, example });

    try {
        const phrasalVerb = await userModel.create(req.body);
        return res.status(201).send(phrasalVerb);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default routerInsert;