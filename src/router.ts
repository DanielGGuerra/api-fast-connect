import { Router } from "express";
import { userRouter } from "./modules/user/routes/user.routes";

const router = Router()

router.use("/users", userRouter)

export { router }