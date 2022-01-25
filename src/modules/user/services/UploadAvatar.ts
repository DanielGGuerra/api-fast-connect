import { getRepository } from "typeorm";
import { ObjectID } from "mongodb";
import { User } from "../entities/User";
import { readFileSync } from "fs";
import { extname } from "path"
import CustomError from "../../error/RequestError";
import { Avatar } from "../entities/Avatar";


export class UploadAvatar {
    public async execute(file: Express.Multer.File, id: string) {
        const userRepository = getRepository(User);
        const userId = new ObjectID(id);

        const user = await userRepository.findOne(userId);
        
        if(!user) {
            throw new CustomError({
                code: 400,
                name: "UploadAvatar",
                message: "User not found"
            })
        }

        console.log(file)
        const fileBuffer = readFileSync(file.path);

        user.avatar = Avatar.init(
            fileBuffer,
            file.filename,
            extname(file.filename)
        );

        await userRepository.update(userId, user);
    }
}