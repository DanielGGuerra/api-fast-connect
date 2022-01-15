import { NextFunction, Request, Response } from "express";
import CustomError from "../error/RequestError";

export default function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): Response {

    if(err instanceof CustomError) {
        return res.status(err.code).json({
            name: err.name,
            message: err.message
        });
    }
    
    console.log(err)

    return res.status(500).json({
        name: "ServerError",
        message: "Internal Server Error"
    });
    
}