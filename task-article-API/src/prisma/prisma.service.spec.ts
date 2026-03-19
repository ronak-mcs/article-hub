import { Test, TestingModule } from '@nestjs/testing';
import { prismaService } from './prisma.service';

describe('prismaService', () => {
  let service: prismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [prismaService],
    }).compile();

    service = module.get<prismaService>(prismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
