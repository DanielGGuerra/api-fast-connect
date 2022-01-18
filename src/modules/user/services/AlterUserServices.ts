import { ObjectID } from "mongodb";
import { getRepository } from "typeorm";
import CustomError from "../../error/RequestError";
import CtyptCode from "../../services/CryptCode";
import { User } from "../entities/User";


interface IUser {
    _id: string;
    isActive?: boolean;
    name?: string;
    email?: string;
    password?: string;
}

export default class AlterUserServices {
    public async execute(userParams: IUser): Promise<User> {
        
        const userRepository = getRepository(User)
        userParams._id = new ObjectID(userParams._id);

        if(!userParams._id) {
            throw new CustomError({
                code: 400,
                name: "AlterUser",
                message: "User ID not informed"
            });
        }

        if(userParams.password) {
            const encode = new CtyptCode();
            userParams.password = await encode.encode(userParams.password);
        }

        const user = await userRepository.findOne({
            where: {
                _id: userParams._id
            }
        });

        if(!user) {
            throw new CustomError({
                code: 400,
                name: "AlterUser",
                message: "User not found"
            })
        }

        const alterUser = Object.assign(user, userParams);

        alterUser.updateAt = new Date();
        
        await userRepository.update(user._id, alterUser);

        return alterUser;
    }
}