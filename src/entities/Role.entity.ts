import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import "reflect-metadata";


@Entity({name:"roles"})
export class Role extends BaseEntity{

    @PrimaryGeneratedColumn({name:"role_id", type:"int"})
    roleId!:number;

    @Column("varchar", {name:"role", nullable: false, length: 50})
    role!:string;

    @CreateDateColumn({update: false})
    @Column("timestamp", {name:"created_at", nullable: false})
    createdAt!:Date;

    @UpdateDateColumn({update: true})
    @Column("timestamp", {name:"updated_at", nullable: false})
    updatedAt!:Date;
}