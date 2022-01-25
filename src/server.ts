import "express-async-errors";
import "reflect-metadata";
import * as express from "express";
import { config } from 'dotenv';
import { createConnection } from 'typeorm';
import { router } from "./router";
import errorMiddleware from "./modules/middlewares/ErrorMiddleware";

config()


createConnection().then(_ => {
    const server = express();

    server.use(express.json());
    server.use(router);
    server.use(errorMiddleware);

    server.listen(3000, () => console.log("Server online - port 3000"))
})