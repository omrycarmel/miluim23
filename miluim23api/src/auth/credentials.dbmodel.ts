import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'credentials'})
export class CredentialsDbModel {
    @PrimaryColumn()
    user: string

    @Column()
    password: string
}