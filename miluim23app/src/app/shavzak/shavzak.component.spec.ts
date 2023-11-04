import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShavzakComponent } from './shavzak.component';

describe('ShavzakComponent', () => {
  let component: ShavzakComponent;
  let fixture: ComponentFixture<ShavzakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShavzakComponent]
    });
    fixture = TestBed.createComponent(ShavzakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
