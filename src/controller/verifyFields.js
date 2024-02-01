import userModel from "../model/model.js";

const verifyFields = (req, res, next) => {
    const { phrasalVerb, meaning, example } = req.body;

    if (!phrasalVerb || !meaning || !example) {
        return res.status(400).send({ message: "Campos obrigatórios não preenchidos" });
    }

    next();
}


export default verifyFields;