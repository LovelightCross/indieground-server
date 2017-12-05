import { Request, Response, NextFunction } from "express";
import procedures from '../procedures/posts.proc';
import { procedure } from "../config/db/index";

export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
    .then((sets) => {
        res.json(sets);
    });
};

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.title, req.body.body, req.body.userId, req.body.dateTime)
    .then((sets) => {
        res.json(sets);
    });
};
