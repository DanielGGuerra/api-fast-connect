import { ObjectID } from "mongodb";
import { getRepository } from "typeorm";
import CustomError from "../../error/RequestError";
import { User } from "../entities/User";

export default class DeleteUserServices {
    public async execute(id: string): Promise<void> {
        const userRepository = getRepository(User);
        const objectId = new ObjectID(id);

        const user = await userRepository.findOne({
            where: {
                _id: objectId
            }
        });

        if(!user) {
            throw new CustomError({
                code: 400,
                name: "UserDelete",
                message: "User not found"
            });
        }

        userRepository.delete(objectId);
    }
}