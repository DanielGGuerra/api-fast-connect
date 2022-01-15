import { Request, Response } from "express";
import AlterUserServices from "../services/AlterUserServices";
import { CreateUserService } from "../services/CreateUserServices";
import DeleteUserServices from "../services/DeleteUserServices";

export class UserController {
    public async create(req: Request, res: Response) {
        const userServices = new CreateUserService();

        const { name, email, password } = req.body;
        console.log(name)
        const user = await userServices.execute({ name, email, password });

        res.status(200).json(user);
    }

    public async alter(req: Request, res: Response) {

        const { _id, isActive, name, email, password } = req.body;

        const userServices = new AlterUserServices();

        const alterUser = await userServices.execute({
            _id,
            isActive,
            name,
            email,
            password
        });

        res.status(201).json(alterUser);

    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        
        const userServices = new DeleteUserServices();

        userServices.execute(id);

        res.status(201).end()
    }
}