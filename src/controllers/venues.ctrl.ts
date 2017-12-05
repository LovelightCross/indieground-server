import { Request, Response, NextFunction } from "express";
import procedures from '../procedures/venues.proc';
import { procedure } from "../config/db/index";

export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
    .then((sets) => {
        res.json(sets);
    });
};

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.venueId, req.body.name, req.body.address1, req.body.address2, req.body.city, req.body.state, req.body.zip)
    .then((sets) => {
        res.json(sets);
    });
};