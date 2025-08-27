import express, { Request, Response} from "express";

function createApp(){

        const app = express();
        
        app.use(express.json());     // midleware para interpretar json

        app.get('/', (req: Request, res: Response) => {
            res.status(200).json({ player: "Retomei_deste_ponto"})
});
         return app
}

export default createApp;