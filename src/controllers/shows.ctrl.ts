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
    procedures.create(req.body.artist, req.body.venue, req.body.datetime, req.body.ticketinfo)
    .then((sets) => {
        res.json(sets);
    });
};