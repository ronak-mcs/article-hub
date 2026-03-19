import { Injectable } from '@nestjs/common';
import { prismaService } from '../../../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: prismaService) {}

  async findByArticle(slug: string) {
    return this.prisma.comment.findMany({
      where: {
        article: { slug },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

async create(slug: string, dto: CreateCommentDto) {
  const article = await this.prisma.article.findUnique({
    where: { slug },
  });

  if (!article) {
    return { error: "article not found"}
  }

  return this.prisma.comment.create({
    data: {
      ...dto,
      articleId: article.id,
    },
  });
}
}