import { Injectable } from '@nestjs/common';
import { ShavzakDay } from './Shavzak';
import { ShavzakNotFoundException } from 'src/exceptions/ShavzakExceptions';

@Injectable()
export class ShavzakService {
    private shavzaks: ShavzakDay[] = [];
    getForDate(date: Date): ShavzakDay {
        return this.shavzaks.find(s => s.date.toDateString() == date.toDateString())
    }

    create(shavzakDay: ShavzakDay) {
        this.shavzaks = this.shavzaks.filter(a => a.date.toDateString() === shavzakDay.date.toDateString())
        this.shavzaks.push(shavzakDay);
    }
}
