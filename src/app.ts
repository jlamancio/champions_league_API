import express from "express";
import router from "./routes";

function createApp(){

        const app = express();
        
        app.use(express.json());     // midleware para interpretar json

        app.use('/api/v1', router);

        return app;
};

export default createApp;