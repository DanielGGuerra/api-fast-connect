import { getRepository } from "typeorm";
import { ObjectID } from "mongodb";
import CustomError from "../../error/RequestError";
import { Chat } from "../entities/Chat";
import { Message } from "../entities/Message";

interface IMessage {
    id_user: string;
    id_chat: string;
    message: string;
}

export default class SendMessageServices {
    public async execute({ id_user, id_chat, message }: IMessage) {
        const chatsRepository = getRepository(Chat);

        const chat = await chatsRepository.findOne({
            where: {
                _id: new ObjectID(id_chat)
            }
        });

        if(!chat) {
            throw new CustomError({
                code: 400,
                name: "SendMessage",
                message: "Chat not found"
            });
        }

        const existsUser = chat.users_id.find(id => id.toString() == id_user);

        if(!existsUser) {
            throw new CustomError({
                code: 400,
                name: "SendMessage",
                message: "User is not from this chat "
            })
        }

        const newMessage = new Message(
            new ObjectID(id_user),
            message
        );

        chat.messages.push(newMessage);

        chatsRepository.update(chat._id, chat);
    }
}