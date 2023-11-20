

import { IsArray, IsNotEmpty } from "class-validator";
import { Mission } from "src/mission/mission";
import { MissionAssignment } from "./Shavzak";

export class CreateShavzakDto {
    @IsNotEmpty()
    date: number
    @IsArray()
    missions: MissionAssignment[]
}