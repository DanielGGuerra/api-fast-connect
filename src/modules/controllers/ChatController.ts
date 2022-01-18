import { Response, Request } from "express"
import CreateChatServices from "../chat/services/CreateChatServices";

export class ChatController {
    public async create(req: Request, res: Response) {
        const { idUsers } = req.body;

        const ChatServices = new CreateChatServices();

        const idChat = await ChatServices.execute({ idUsers });

        res.status(200).json({chat: idChat});
    }
}