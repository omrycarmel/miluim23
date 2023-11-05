import { Injectable } from '@nestjs/common';
import { Mission } from './mission';

@Injectable()
export class MissionService {
    missions: Mission[] = []

    create(mission: Mission) {
        this.missions.push(mission);
    }
    getAll(): Mission[] {
        return this.missions;
    }
}
