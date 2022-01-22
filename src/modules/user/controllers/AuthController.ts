import { Request, Response } from "express";
import { AuthUserServices } from "../services/AuthUserServices";

export class AuthController {
    public async login(req: Request, res: Response) {
        const authUserServices = new AuthUserServices();

        const { email, password } = req.body;

        const token = await authUserServices.execute({ email, password });

        res.status(200).json({ token });
    }
}