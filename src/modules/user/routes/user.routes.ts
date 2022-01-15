import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userController = new UserController();

const userRouter = Router();

userRouter.post("/create", userController.create);

export { userRouter }