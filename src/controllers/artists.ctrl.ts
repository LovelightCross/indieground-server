import { Request, Response, NextFunction } from "express";
import procedures from '../procedures/artists.proc';
import { procedure } from "../config/db/index";

export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
    .then((artists) => {
        res.json(artists);
    });
};

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.id, req.body.userId, req.body.postId, req.body.body)
    .then((sets) => {
        res.json(sets);
    });
};