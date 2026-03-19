import { Injectable } from '@nestjs/common';
import { prismaService } from '../../../prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import slugify from 'slugify';

@Injectable()
export class ArticlesService {
  constructor(private prisma: prismaService) {}

  async findAll() {
    return this.prisma.article.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        author: true,
        category: true,
        publishedAt: true,
      },
      orderBy: { publishedAt: 'desc' },
    });
  }

  async findOne(slug: string) {
    return this.prisma.article.findUnique({
      where: { slug },
      include: { comments: true },
    });
  }

  async create(dto: CreateArticleDto) {
    const slug = slugify(dto.title, { lower: true });

    return this.prisma.article.create({
      data: {
        ...dto,
        slug,
      },
    });
  }
}