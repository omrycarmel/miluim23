import { Component, OnInit } from '@angular/core';
import { ShavzakDay } from '../entities/ShavzakDay';
import { ShavzakService } from '../shavzak.service';
import { UserServiceService } from '../user-service.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shavzak',
  templateUrl: './shavzak.component.html',
  styleUrls: ['./shavzak.component.css']
})
export class ShavzakComponent implements OnInit {

  constructor(
    private shavzakService: ShavzakService,
    private userService: UserServiceService,
    private formBuilder: FormBuilder
  )
  {}
  shavzak: ShavzakDay = new ShavzakDay([]);
  allUsesNames: string[] = [];
  formGroup!: FormGroup;
  public sep = '__';

  ngOnInit(): void {

    this.shavzak = this.shavzakService.get()
    this.allUsesNames = this.userService.getAll().map(u => u.name)
    this.userService.refreshDataEvent.subscribe(v => 
      this.allUsesNames = this.userService.getAll().map(u => u.name)
    )
    let formObject = new Map();
    this.shavzak.missions.forEach(m => 
      formObject.set(m.name, new FormArray(
        m.membersNames.map(m => new FormControl(''))
      ))

      )
    let entries = this.shavzak.missions.flatMap(m => {
      let missionIds = [];
      for (let i = 0; i < m.membersNames.length; i++) {
        missionIds.push([m.name + this.sep + i, m.membersNames[i]])
      }
      return missionIds
    })

    this.formGroup = this.formBuilder.group(
      Object.fromEntries(entries)
    )
  }
  save() {
    for (let k in this.formGroup.value) {
      let v = this.formGroup.value[k]
      let [missionName, userIndex] = k.split(this.sep)
      this.shavzak.missions.find(m => m.name == missionName)!.membersNames[parseInt(userIndex)] = v
    }
    this.shavzakService.save(this.shavzak)
  }

}
