import mongoose from "mongoose";
import 'dotenv/config';


mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.m6efoyx.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('MongoDB Conectado'))
    .catch(err => {
        console.error('Erro de Conexão com o MongoDB:', err);
        process.exit(1);
    });
