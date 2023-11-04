import { TestBed } from '@angular/core/testing';

import { ShavzakService } from './shavzak.service';

describe('ShavzakService', () => {
  let service: ShavzakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShavzakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
