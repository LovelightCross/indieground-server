import { Request, Response, NextFunction } from "express";
import procedures from '../procedures/users.proc';
import { procedure } from "../config/db/index";

export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
    .then((sets) => {
        res.json(sets);
    });
};

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.first_name, req.body.last_name, req.body.email, req.body.password)
    .then((sets) => {
        res.json(sets);
    });
};