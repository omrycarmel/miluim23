import { HttpException, Injectable } from '@nestjs/common';
import { ShavzakDay } from './Shavzak';
import { AppDataSource } from 'src/db/dbinit';
import { ShavzakRelationDbModel } from './shavzak.dbmodel';
import { Mission } from 'src/mission/mission';

@Injectable()
export class ShavzakService {
    private repo = AppDataSource.getRepository(ShavzakRelationDbModel);

    async getForDate(date: Date): Promise<ShavzakDay> {
        const models = await this.repo.findBy({date});
        if (models.length == 0) {
            throw new HttpException("not found", 404);
        }
        const missions = new Map<string, Mission>();
        for (const m of models) {
            if (!missions.has(m.mission)) {
                missions.set(m.mission, new Mission(m.mission, 0, 0, false, []))
            }
            missions.get(m.mission).users.push(m.user);
        }
        return new ShavzakDay(date, Array.from(missions.values()));

    }

    async create(shavzakDay: ShavzakDay): Promise<void> {
        this.repo.delete( {date: shavzakDay.date})
        for (const m of shavzakDay.missions) {
            for (const u of m.users) {
                const model = new ShavzakRelationDbModel();
                model.date = shavzakDay.date;
                model.mission = m.name;
                model.user = u;
                await this.repo.save(model);
            }
        }
    }
}
