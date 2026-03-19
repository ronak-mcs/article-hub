import { Test, TestingModule } from '@nestjs/testing';
import { productInquiryController } from './article.controller';
import { productInquiryService } from './article.service';

describe('productInquiryController', () => {
  let controller: productInquiryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [productInquiryController],
      providers: [productInquiryService],
    }).compile();

    controller = module.get<productInquiryController>(productInquiryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
