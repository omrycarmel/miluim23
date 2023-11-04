
export class Mission {
    constructor(
        public name: string,
        public startTimeMin: number,
        public endTimeMin: number,
        public allDay: boolean,
        public membersNames: string[] = []
    ) {}

}