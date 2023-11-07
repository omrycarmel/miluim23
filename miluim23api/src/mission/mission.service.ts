import { Injectable } from '@nestjs/common';
import { Mission } from './mission';
import { AppDataSource } from 'src/db/dbinit';
import { MissionDbModel } from './mission.dbmodel';
import { Repository } from 'typeorm';

@Injectable()
export class MissionService {
    readonly repo: Repository<MissionDbModel>;
    constructor() {
        this.repo = AppDataSource.getRepository(MissionDbModel); 
    }
    async create(mission: Mission): Promise<void> {
        const model = new MissionDbModel();
        model.name = mission.name;
        this.repo.save(model);

    }
    async getAll(): Promise<Mission[]> {
        const models =  await this.repo.find()
        return models.map(m => m.toEntity())
    }
}
