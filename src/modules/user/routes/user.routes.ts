import { Router } from "express";
import { UserController } from "../controllers/UserController";
import * as multer from "multer";
import { randomUUID } from "crypto";

const userController = new UserController();

const storage = multer.diskStorage({
    filename: function(req, file, callback) {
        const filename = `${randomUUID()}-${file.originalname}`; 

        callback(null, filename);
    },
});

const upload = multer({ storage: storage });

const userRouter = Router();

userRouter.post("/", userController.create);
userRouter.post("/avatar/:id", upload.single("avatar"), userController.photoAvatar)
userRouter.get("/avatar/:id", userController.getAvatar)
userRouter.put("/", userController.alter);
userRouter.delete("/:id", userController.delete);

export { userRouter }