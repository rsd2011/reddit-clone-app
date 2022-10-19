import {Entity, Column, Index, OneToMany, BeforeInsert} from "typeorm"
import {IsEmail, Length} from "class-validator";
import {Exclude} from "class-transformer";
import BaseEntity from './BaseEntity'
import bcrypt from 'bcryptjs';

@Entity("users")
export default class User extends BaseEntity {
    @Index()
    @IsEmail(undefined)
    @Length(1, 255)
    @Column({unique: true})
    email: string;

    @Index()
    @Length(3, 32)
    @Column()
    username: string;

    @Exclude()
    @Length(6, 255)
    @Column()
    password: string;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];

    @OneToMany(() => Vote, (vote) => vote.user)
    votes: Vote[];

    @BeforeInsert
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 6);
    }
}
