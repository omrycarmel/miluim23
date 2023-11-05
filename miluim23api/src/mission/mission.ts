import { IsNotEmpty } from "class-validator";

export class Mission {
    @IsNotEmpty()
    name: string
    startTimeMin: number
    endTimeMin: number
    allDay: boolean
    membersNames: string[] = []  
    constructor(
        name: string,
        startTimeMin: number,
        endTimeMin: number,
        allDay: boolean,
        membersNames: string[] = []
    ) {
        this.name = name;
        this.membersNames = membersNames;  
    }

}