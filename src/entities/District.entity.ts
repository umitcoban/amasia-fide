import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import "reflect-metadata";

@Entity({name:"districts"})
export class District extends BaseEntity{

    @PrimaryGeneratedColumn({name:"district_id", type:"int"})
    districtId!:number;

    @Column("varchar", {nullable: false, unique: true, length: 90})
    name!:string;

    @CreateDateColumn({update: false})
    @Column("timestamp", {name:"created_at", nullable: false})
    createdAt!:Date;
    
    @UpdateDateColumn({update: true})
    @Column("timestamp", {name:"updated_at", nullable: false})
    updatedAt!:Date;
}