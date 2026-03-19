import { Module } from '@nestjs/common';
import { prismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './api/web/article/article.module';
import { CommentsModule } from './api/web/comment/comment.module';

@Module({
  imports: [
    prismaModule,
    ArticlesModule,
    CommentsModule,
  ],
})
export class AppModule {}