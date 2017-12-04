import { appendFile } from "fs";

declare namespace Express {
    export interface Request {
        payload?: any;
    }
}