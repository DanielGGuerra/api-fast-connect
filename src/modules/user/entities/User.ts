import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";
import { Avatar } from "./Avatar";

@Entity({ database: "app_db", name: "users" })
export class User {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    birthDate: Date;

    @Column()
    avatar: Avatar;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}