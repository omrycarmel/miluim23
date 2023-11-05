import { Test, TestingModule } from '@nestjs/testing';
import { ShavzakService } from './shavzak.service';

describe('ShavzakService', () => {
  let service: ShavzakService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShavzakService],
    }).compile();

    service = module.get<ShavzakService>(ShavzakService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
