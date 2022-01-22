import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const userController = new AuthController();

const authRouter = Router();

authRouter.post("/", userController.login);

export { authRouter }