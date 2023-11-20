import { Mission } from "./Mission";
import { MissionAssignment } from "./MissionAssignment";
export class ShavzakDay {
    constructor (
        public date: Date,
        public missions: MissionAssignment[]
    ) {

    }

    clone(): ShavzakDay {
        return Object.assign({}, this);
    }
}