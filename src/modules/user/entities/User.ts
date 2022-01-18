import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";

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

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}