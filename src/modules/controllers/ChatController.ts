import { Response, Request } from "express"
import CreateChatServices from "../chat/services/CreateChatServices";
import { GetMessagesServices } from "../chat/services/GetMessagesServices";
import SendMessageServices from "../chat/services/SendMessageServices";

export class ChatController {
    public async create(req: Request, res: Response) {
        const { idUsers } = req.body;

        const chatServices = new CreateChatServices();

        const idChat = await chatServices.execute({ idUsers });

        res.status(200).json({chat: idChat});
    }

    public async sendMessage(req: Request, res: Response) {
        const { id_user, id_chat, message } = req.body;

        const chatServices = new SendMessageServices();

        await chatServices.execute({ id_user, id_chat, message });

        res.status(200).end();
    }

    public async getMessages(req: Request, res: Response) {
        const { idchat } = req.params;

        const chatServices = new GetMessagesServices();

        const messages = await chatServices.execute(idchat);

        res.status(200).json({
            messages: messages
        });
    }
}