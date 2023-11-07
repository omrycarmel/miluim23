import { Column, Entity, PrimaryColumn } from "typeorm"
import { User } from "./user"

@Entity({name: "user"})
export class UserDbModel {
    @PrimaryColumn()
    privateNumber: number
    @Column()
    name: string
    @Column()
    phone: string

    toEntity() {
        return new User(
            this.name, this.phone, this.privateNumber
        )
    }
}