import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//decorators help define what we're talking about
@Entity()
export class Users extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
    
    @Column()
    username!: string;
    
    @Column()
    password!: string;

}