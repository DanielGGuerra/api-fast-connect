import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Message {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column({ nullable: false })
    idUser: ObjectID;

    @Column({ nullable: false })
    content: string;

    @CreateDateColumn({ default: new Date() })
    createAt: Date;
}