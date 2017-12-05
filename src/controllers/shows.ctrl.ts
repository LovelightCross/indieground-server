import { Request, Response, NextFunction } from "express";
import procedures from '../procedures/shows.proc';
import { procedure } from "../config/db/index";

export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
    .then((sets) => {
        res.json(sets);
    });
};

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.showId, req.body.venueId, req.body.name, req.body.startTime, req.body.endTime, req.body.price, req.body.url)
    .then((sets) => {
        res.json(sets);
    });
};