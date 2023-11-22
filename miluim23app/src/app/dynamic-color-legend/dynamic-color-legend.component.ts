import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export class MappedColorRecord{
  constructor(public key: string, public color: string) {}
}

@Component({
  selector: 'app-dynamic-color-legend',
  templateUrl: './dynamic-color-legend.component.html',
  styleUrls: ['./dynamic-color-legend.component.css']
})

export class DynamicColorLegendComponent implements OnInit {
  constructor(private fb: FormBuilder) {
  }
  @Input()
  keys: string[] = [];

  @Output()
  onChangeEvent = new EventEmitter<MappedColorRecord[]>();

  form!: FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      records: this.fb.array(
        this.keys.map(k => {
          const color = this.getRecordColorFromCache(k)
          return this.fb.group({ color })
        })
      )
    });
    this.onChangeColor();
  }

  get records() {
    return this.form.controls['records'] as FormArray;
  }

  public onChangeColor(): void {
    const colors = this.records.controls.map((c, i) => 
      new MappedColorRecord(this.keys[i], c.value.color));
    this.onChangeEvent.emit(colors);
    this.storeRecordColorsInCache(colors);
  }

  readonly colorCachePrefix = 'lgenednColor_';
  getRecordColorFromCache(mission: string): string {
    return localStorage.getItem(this.colorCachePrefix + mission) ?? ' black'
  }

  storeRecordColorsInCache(records: MappedColorRecord[]): void {
    for (const r of records) {
      localStorage.setItem(this.colorCachePrefix + r.key, r.color);
    }
  }
}
