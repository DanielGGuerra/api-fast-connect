import { NextFunction, Request, Response } from "express";

export default function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): Response {

    if(err instanceof Error) {
        return res.status(400).json({
            name: err.name,
            message: err.message
        });
    }

    return res.status(500).json({
        name: "ServerError",
        message: "Internal Server Error"
    });
    
}