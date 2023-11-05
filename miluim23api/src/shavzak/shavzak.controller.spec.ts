import { Test, TestingModule } from '@nestjs/testing';
import { ShavzakController } from './shavzak.controller';

describe('ShavzakController', () => {
  let controller: ShavzakController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShavzakController],
    }).compile();

    controller = module.get<ShavzakController>(ShavzakController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
