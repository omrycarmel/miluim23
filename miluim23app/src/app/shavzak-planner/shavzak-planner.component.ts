import { Component, OnInit } from '@angular/core';
import { ShavzakService } from '../shavzak.service';
import { UserServiceService } from '../user-service.service';
import { ShavzakDay } from '../entities/ShavzakDay';
import { User } from '../entities/User';
import { MappedColorRecord } from '../dynamic-color-legend/dynamic-color-legend.component';
import { substractDaysFromDate } from '../utils/date-utils';



@Component({
  selector: 'app-shavzak-planner',
  templateUrl: './shavzak-planner.component.html',
  styleUrls: ['./shavzak-planner.component.css']
})
export class ShavzakPlannerComponent implements OnInit{
  constructor(
    private shavzakService: ShavzakService,
    private userService: UserServiceService
  ) {}

  shavzakDays: ShavzakDay[] = [];
  tableTitles: string[] = [];
  users: User[] = [];
  missionLegend: MappedColorRecord[] = [];
  readonly NOT_IN_MISSION = 'empty';

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => this.users = users);
    this.shavzakService.getLast().subscribe(s => {
      this.shavzakDays = [s];
      this.fillShavzakDays();
    })
  }

  fillShavzakDays(): void {
    if (this.shavzakDays.length >= 4) {
      this.afterLoadingShavzakData();
      return;
    }
    const d = substractDaysFromDate(1, this.shavzakDays[this.shavzakDays.length -1].date);
    this.shavzakService.get(d).subscribe(sd => {
      this.shavzakDays.push(sd);
      this.fillShavzakDays();
    }, _ => this.afterLoadingShavzakData())
  }

  afterLoadingShavzakData() {
    this.createMissionLegend();
    this.createTableTitles();
  }

  createTableTitles(): void {
    this.tableTitles = [''].concat(this.shavzakDays.map(d => d.date.toDateString()));
  }

  createMissionLegend(): void {
    this.missionLegend = [new MappedColorRecord(this.NOT_IN_MISSION, 'white')];
    const allMissions = new Set<string>();
    for (const sd of this.shavzakDays) {
      for (const m of sd.missions) {
        allMissions.add(m.missionName);
      }
    }
    allMissions.forEach(mn =>
      this.missionLegend.push(new MappedColorRecord(mn, 'black')));
  }

  getMissionLegendKeys(): string[] {
    return this.missionLegend.map(r => r.key);
  }

  

  getMissionOfUserInShavzak(user: User, shavzakDay: ShavzakDay): string | undefined {
    return shavzakDay.missions.find(m =>
      m.users.findIndex(n =>
        n=== user.privateNumber) !== -1)?.missionName;
  }

  getMissionColorOfUserInDate(user: User, shavzakDay: ShavzakDay): string {
    const mission = this.getMissionOfUserInShavzak(user, shavzakDay) ?? this.NOT_IN_MISSION;
    return this.getColorForMission(mission);
  }

  onUpdateColorLegend(records: MappedColorRecord[]) {
    this.missionLegend = records;
  }

  getColorForMission(mission: string): string {
    return this.missionLegend.find(m => m.key == mission)?.color ?? '';
  }

  rotateMission(user: User, shavzakDay: ShavzakDay): void {
    const curentMission = this.getMissionOfUserInShavzak(user, shavzakDay) ?? this.NOT_IN_MISSION;
    const curMissionIndex = this.missionLegend.findIndex(m => m.key == curentMission);
    const nextIndex = (curMissionIndex + 1) % this.missionLegend.length;
    const nextMission = this.missionLegend[nextIndex].key;
    shavzakDay.missions = shavzakDay.missions.map(m => {
      m.users = m.users.filter(u => u != user.privateNumber);
      return m;
    });
    if (nextIndex <= 0) {
      return;
    }
    shavzakDay.missions = shavzakDay.missions.map(m => {
      if (m.missionName == nextMission) {
        m.users.push(user.privateNumber);
      }
      return m;
    });
  }
}
