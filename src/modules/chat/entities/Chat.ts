import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";
import { Message } from "./Message";

@Entity({ database: "app_db", name: "chats" })
export class Chat {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    messages: Array<Message>;

    @Column()
    users_id: Array<ObjectID>;

    @CreateDateColumn({ default: new Date() })
    createAt: Date;

    @UpdateDateColumn({ default: new Date() })
    updateAt: Date;
}