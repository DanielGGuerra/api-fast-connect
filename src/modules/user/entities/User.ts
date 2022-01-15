import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";

@Entity({ database: "app_db", "name": "users" })
export class User {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column({nullable: false, default: true})
    isActive: boolean;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({nullable: false, default: new Date()})
    birthDate: Date;

    @CreateDateColumn({nullable: false, default: new Date()})
    createAt: Date;

    @UpdateDateColumn({ nullable: false })
    updateAt: Date;

}