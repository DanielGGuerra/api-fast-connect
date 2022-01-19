import { getRepository } from "typeorm"
import { ObjectID } from "mongodb";
import CustomError from "../../error/RequestError";
import { User } from "../../user/entities/User"
import { Chat } from "../entities/Chat";

interface IChat {
    idUsers: Array<string>;
}

export default class CreateChatServices {
    public async execute({ idUsers }: IChat): Promise<string> {
        const usersRepository = getRepository(User);
        const chatsReporsitory = getRepository(Chat);
        
        const ids = idUsers.map(id => new ObjectID(id));

        const users = await usersRepository.find({
            where: {
                _id: { $in: ids }
            }
        });

        if(!users || users.length === 0) {
            throw new CustomError({
                code: 400,
                name: "CreateChat",
                message: "Not found users"
            });
        }

        const chat = chatsReporsitory.create({
            users_id: ids,
            messages: []
        });

        const { _id } = await chatsReporsitory.save(chat);

        return _id.toString();
    }
}