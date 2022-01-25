import { getRepository } from "typeorm";
import { ObjectID } from "mongodb";
import { User } from "../entities/User";
import CustomError from "../../error/RequestError";
import { writeFileSync, writeFile } from "fs"
import {  } from "stream"


export class GetAvatar {
    public async execute(id: string) {
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

        const avatar = user.avatar;

        if(!avatar) {
            throw new CustomError({
                code: 400,
                name: "UploadAvatar",
                message: "User has no avatar"
            })
        }
        // to-do: ajustar a leitura do binary
        writeFile(`./${avatar.filename}`, Buffer.from(avatar.avatar), () => console.log);        
    }
}