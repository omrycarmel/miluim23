import { MissionDbModel } from "src/mission/mission.dbmodel";
import { ShavzakRelationDbModel } from "src/shavzak/shavzak.dbmodel";
import { UserDbModel } from "src/user/user.dbmodel";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "shavzak",
    synchronize: true,
    logging: true,
    entities: [UserDbModel, MissionDbModel, ShavzakRelationDbModel],
    subscribers: [],
    migrations: [],
})