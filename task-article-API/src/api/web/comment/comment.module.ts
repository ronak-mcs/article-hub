import { Module } from '@nestjs/common';
import { CommentsService } from './comment.service';
import { CommentsController } from './comment.controller';
import { prismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CommentsController],
  providers: [CommentsService,  prismaService],
})
export class CommentsModule {}
