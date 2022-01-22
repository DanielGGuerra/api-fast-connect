import { getRepository } from "typeorm";
import CustomError from "../../error/RequestError";
import CtyptCode from "../../services/CryptCode";
import { User } from "../entities/User";
import { Auth } from "../../services/Auth";

interface IUser {
    email: string;
    password: string;
}

export class AuthUserServices {
    public async execute({ email, password }: IUser) {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({
            where: {
                email: email
            }
        });

        if(!user) {
            throw new CustomError({
                code: 400,
                name: "AuthUser",
                message: "Not found user"
            });
        }

        const isAuthentication = await CtyptCode.compareOnHash(password, user.password);

        if(!isAuthentication) {
            throw new CustomError({
                code: 401,
                name: "AuthUser",
                message: "Password invalid"
            })
        }

        const token = Auth.genereteToken({
            name: user.name,
            email: user.email
        });

        return token;
    }
}