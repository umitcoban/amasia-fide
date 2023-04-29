import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import "reflect-metadata";

@Entity({name:"users"})
export class User extends BaseEntity {

    @PrimaryGeneratedColumn({name:"user_id", type: "bigint"})
    userId!:number;

    @Column("varchar", {name:"first_name", nullable: false, length: 250})
    firstName!: string;

    @Column("varchar", {name:"middle_name", nullable: true, length: 250})
    middleName!: string;

    @Column("varchar", {name:"last_name", nullable: false, length: 250})
    lastName!: string;

    @Column("char", {name: "citizen_number", nullable: false})
    citizenNumber!:string;

    @Column("varchar", {nullable: false, unique: true, length: 250})
    email!:string;

    @Column("varchar",{nullable: false, length: 17, unique: true})
    phone!:string;

    @Column("varchar", {length: 250, nullable: false})
    password!:string;

    @Column("boolean", {name:"is_active", nullable: false, default:true})
    isActive!:boolean;

    @CreateDateColumn({update: false})
    @Column("timestamp", {name:"created_at", nullable: false})
    createdAt!:Date;
    
    @UpdateDateColumn({update: true})
    @Column("timestamp", {name:"updated_at", nullable: false})
    updatedAt!:Date;
}