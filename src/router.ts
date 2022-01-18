import { Router } from "express";
import { chatRouter } from "./modules/chat/routes/chat.routes";
import { userRouter } from "./modules/user/routes/user.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/chat", chatRouter);

export { router }