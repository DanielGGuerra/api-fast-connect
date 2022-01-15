import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userController = new UserController();

const userRouter = Router();

userRouter.post("/", userController.create);
userRouter.put("/", userController.alter);
userRouter.delete("/:id", userController.delete);

export { userRouter }