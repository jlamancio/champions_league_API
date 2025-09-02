import { Request, Response  } from "express";

export const  getPlayer = (req: Request, res: Response) => {
    res.status(200).json({ player: "camada_router-ok" });
};