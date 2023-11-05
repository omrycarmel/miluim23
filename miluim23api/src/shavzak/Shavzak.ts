import { Mission } from "src/mission/mission";

export class ShavzakDay {
    constructor (
        public date: Date,
        public missions: Mission[]
    ) {

    }
}