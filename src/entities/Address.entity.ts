import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from "typeorm";
import "reflect-metadata";
import { City } from "./City.entity";
import { District } from "./District.entity";
import { User } from "./User.entity";

@Entity({name:"addresses"})
export class Address extends BaseEntity{

    @PrimaryGeneratedColumn({name:"address_id", type:"bigint"})
    addressId!:number;

    @Column("varchar", {nullable: false, unique: true, length: 90})
    name!:string;

    @Column("varchar", {nullable: false, unique: true, length: 500})
    line!:string;

    @OneToOne(() => City, (city) => city.cityId, {eager: false, onDelete:"RESTRICT", onUpdate:"CASCADE"})
    @JoinColumn({name:"city_id", referencedColumnName:"city_id"})
    cityId!:City;

    @OneToOne(() => District, (district) => district.districtId, {eager: false, onDelete:"RESTRICT", onUpdate:"CASCADE"})
    @JoinColumn({name:"district_id", referencedColumnName:"district_id"})
    districtId!:District;

    @OneToOne(() => User, (user) => user.userId, {eager: false, onDelete:"RESTRICT", onUpdate:"CASCADE"})
    @JoinColumn({name:"user_id", referencedColumnName:"user_id"})
    userId!:User;

    @CreateDateColumn({update: false})
    @Column("timestamp", {name:"created_at", nullable: false})
    createdAt!:Date;

    @UpdateDateColumn({update: true})
    @Column("timestamp", {name:"updated_at", nullable: false})
    updatedAt!:Date;
}