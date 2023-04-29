import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import "reflect-metadata";

@Entity({name:"cities"})
export class City extends BaseEntity{

    @PrimaryGeneratedColumn({name:"city_id", type:"int"})
    cityId!:number;

    @Column("varchar", {nullable: false, unique: true, length: 90})
    name!:string;

    @CreateDateColumn({update: false})
    @Column("timestamp", {name:"created_at", nullable: false})
    createdAt!:Date;
    
    @UpdateDateColumn({update: true})
    @Column("timestamp", {name:"updated_at", nullable: false})
    updatedAt!:Date;
}