import { getMongoRepository } from "typeorm";
import CustomError from "../../error/RequestError";
import { User } from "../entities/User";

interface IUser {
    name: string;
    email: string;
    password: string;
}
export class CreateUserService {
    public async execute({ name, email, password }: IUser): Promise<User> {
        const usersRepositories = getMongoRepository(User);

        const user = usersRepositories.create({
            isActive: true,
            name,
            email,
            password
        });

        const isExists = await usersRepositories.findOne({
            where: {
                email: email 
            }
        });

        if(isExists) {
            throw new CustomError({
                code: 400,
                name: "FormUser",
                message: "User already exists"
            });
        }
        
        await usersRepositories.save(user);

        return user;
    }
}