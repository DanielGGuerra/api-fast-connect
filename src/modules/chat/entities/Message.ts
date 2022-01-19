import { ObjectID } from "mongodb";

export class Message {
    idUser: ObjectID;
    content: string;
    createAt: Date;

    constructor(id, content) {
        this.idUser = id;
        this.content = content;
        this.createAt = new Date();
    }
}