import { ObjectID } from "mongodb";
import { getRepository } from "typeorm";
import CustomError from "../../error/RequestError";
import { Chat } from "../entities/Chat";
import { Message } from "../entities/Message";

export class GetMessagesServices {
    public async execute(id_chat: string): Promise<Message[]> {
        const chatRepository = getRepository(Chat);
        const id = new ObjectID(id_chat);

        const chat = await chatRepository.findOne({
            where: {
                _id: id
            }
        });

        if(!chat) {
            throw new CustomError({
                code: 400,
                name: "GetMessages",
                message: "Not found chat"
            });
        }

        const messages = chat.messages;

        return messages;
    }
}