import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShavzakPlannerComponent } from './shavzak-planner.component';

describe('ShavzakPlannerComponent', () => {
  let component: ShavzakPlannerComponent;
  let fixture: ComponentFixture<ShavzakPlannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShavzakPlannerComponent]
    });
    fixture = TestBed.createComponent(ShavzakPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
