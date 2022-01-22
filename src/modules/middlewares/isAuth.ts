import { NextFunction, Request, Response } from "express";
import { Auth } from "../services/Auth";

export default function isAuth(req: Request, res: Response, next: NextFunction) {
    try {
        const baererToken = req.headers.authorization;
        
        if(!baererToken) {
            return res.status(401).end();
        }

        const isAuth = Auth.verifyToken(baererToken);

        if(!isAuth) {
            return res.status(401).end();
        }

        return next();
    } catch(err) {
        return res.status(401).end();
    }
}