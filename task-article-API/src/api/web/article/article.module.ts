import { Module } from '@nestjs/common';
import { ArticlesService } from './article.service';
import { ArticlesController } from './article.controller';
import { prismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [],
  controllers: [ArticlesController],
  providers: [ArticlesService, prismaService],
})
export class ArticlesModule {}
