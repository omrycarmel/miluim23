import { IsNotEmpty } from "class-validator";

export class Mission {
    @IsNotEmpty()
    name: string
    startTimeMin: number
    endTimeMin: number
    allDay: boolean
    users: number[] = []  
    constructor(
        name: string,
        startTimeMin: number,
        endTimeMin: number,
        allDay: boolean,
        users: number[] = []
    ) {
        this.name = name;
        this.users = users;  
    }

}