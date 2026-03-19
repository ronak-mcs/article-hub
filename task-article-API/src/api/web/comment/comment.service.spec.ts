import { Test, TestingModule } from '@nestjs/testing';
import { productInquiryService } from './comment.service';

describe('productInquiryService', () => {
  let service: productInquiryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [productInquiryService],
    }).compile();

    service = module.get<productInquiryService>(productInquiryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
