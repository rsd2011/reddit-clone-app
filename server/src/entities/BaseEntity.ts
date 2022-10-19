import {BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export default abstract class Entity extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    constructor(id: number, createdAt: Date, updatedAt: Date) {
        super();
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}