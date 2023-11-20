import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicColorLegendComponent } from './dynamic-color-legend.component';

describe('DynamicColorLegendComponent', () => {
  let component: DynamicColorLegendComponent;
  let fixture: ComponentFixture<DynamicColorLegendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicColorLegendComponent]
    });
    fixture = TestBed.createComponent(DynamicColorLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
