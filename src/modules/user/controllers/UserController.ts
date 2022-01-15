import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserServices";

export class UserController {
    public async create(req:Request, res: Response) {
        const userServices = new CreateUserService();

        const { name, email, password } = req.body;
        console.log(name)
        const user = await userServices.execute({ name, email, password });

        res.status(200).json(user);
    }
}