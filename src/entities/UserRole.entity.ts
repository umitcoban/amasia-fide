import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from "typeorm";
import "reflect-metadata";
import { Role } from "./Role.entity";
import { User } from "./User.entity";


@Entity({name:"user_roles"})
export class UserRole extends BaseEntity{

    @PrimaryGeneratedColumn({name:"role_id", type:"bigint"})
    userRoleId!:number;

    @OneToOne(() => Role, (role) => role.roleId, {onDelete:"RESTRICT", onUpdate:"CASCADE"})
    @JoinColumn({name:"role_id", referencedColumnName:"role_id"})
    roleId!: Role;

    @OneToOne(() => User, (user) => user.userId, {onDelete:"RESTRICT", onUpdate:"CASCADE"})
    @JoinColumn({name:"user_id", referencedColumnName:"user_id"})
    userId!: User;

    @CreateDateColumn({update: false})
    @Column("timestamp", {name:"created_at", nullable: false})
    createdAt!:Date;

    @UpdateDateColumn({update: true})
    @Column("timestamp", {name:"updated_at", nullable: false})
    updatedAt!:Date;
}