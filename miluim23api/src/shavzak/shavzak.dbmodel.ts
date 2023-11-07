import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "shavzak"})
export class ShavzakRelationDbModel {
    @PrimaryColumn()
    date: Date;
    @PrimaryColumn()
    mission: string;
    @PrimaryColumn()
    user: number;

}