import { Router } from "express";
import { chatRouter } from "./modules/chat/routes/chat.routes";
import isAuth from "./modules/middlewares/isAuth";
import { authRouter } from "./modules/user/routes/auth.routes";
import { userRouter } from "./modules/user/routes/user.routes";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", isAuth, userRouter);
router.use("/chat", isAuth,chatRouter);

export { router }