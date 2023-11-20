import { IsNotEmpty, IsArray} from "class-validator";
import { Mission } from "src/mission/mission";

export class MissionAssignment{
    @IsNotEmpty()
    missionName: string

    @IsArray()
    users: number[]

    constructor(missionName: string, users: number[]) {
        this.missionName = missionName;
        this.users = users;
    }
}
export class ShavzakDay {
    constructor (
        public date: Date,
        public missions: MissionAssignment[]
    ) {

    }
}