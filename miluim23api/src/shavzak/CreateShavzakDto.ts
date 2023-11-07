

import { IsNotEmpty } from "class-validator";
import { Mission } from "src/mission/mission";

export class CreateShavzakDto {
    @IsNotEmpty()
    date: number
    @IsNotEmpty()
    missions: Mission[]
}