import { Column, Entity, PrimaryColumn } from "typeorm"
import { Mission } from "./mission"

@Entity({name: "mission"})
export class MissionDbModel {
    @PrimaryColumn()
    name: string

    toEntity(): Mission {
        return new Mission(
            this.name,0, 0, false, []
        );
    }
}