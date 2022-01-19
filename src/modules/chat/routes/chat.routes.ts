import { Router } from "express";
import { ChatController } from "../../controllers/ChatController";

const chatController = new ChatController();

const chatRouter = Router();

chatRouter.post("/", chatController.create);
chatRouter.post("/message", chatController.sendMessage);
chatRouter.get("/message/:idchat", chatController.getMessages);

export { chatRouter }