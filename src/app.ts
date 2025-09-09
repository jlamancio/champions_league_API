import express from "express";
import router from "./routes";
import cors from "cors";

function createApp() {

        const app = express();

        app.use(express.json());     // midleware para interpretar json

        app.use('/api/v1', router);

    //    const corsOptions = {
    //            origin: "url",
    //            methods: ["GET"]
    //    };

        app.use(cors());             // habilita o CORS para todas as rotas

        return app;
};


