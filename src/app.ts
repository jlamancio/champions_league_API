import express, { Request, Response} from "express";
import { getPlayer } from "./controllers/players-controller";

function createApp(){

        const app = express();
        
        app.use(express.json());     // midleware para interpretar json

        app.get('/', getPlayer);

        return app;
};

export default createApp;