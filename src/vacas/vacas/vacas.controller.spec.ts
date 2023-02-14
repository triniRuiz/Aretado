import { Test, TestingModule } from '@nestjs/testing';
import { VacasController } from './vacas.controller';

describe('VacasController', () => {
  let controller: VacasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VacasController],
    }).compile();

    controller = module.get<VacasController>(VacasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
