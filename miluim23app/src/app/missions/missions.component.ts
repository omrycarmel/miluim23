import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';
import { Mission } from '../entities/Mission';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  constructor(
    private missionService: MissionService
  )
  {}

  missions: Mission[] = [];
  ngOnInit(): void {
    this.missionService.getAll().subscribe(missions => this.missions = missions);
  }
}
