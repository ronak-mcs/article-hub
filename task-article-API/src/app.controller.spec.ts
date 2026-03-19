import { Test, TestingModule } from '@nestjs/testing';
import { appService } from './app.service';
import { appController } from './app.controller';

describe('appController', () => {
  let controller: appController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [appController],
      providers: [appService],
    }).compile();

    controller = app.get<appController>(appController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.getHello()).toBe('Hello World!');
    });
  });
});
