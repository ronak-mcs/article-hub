import { Injectable } from '@nestjs/common';
import { prismaService } from '../../../prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import slugify from 'slugify';
import { Prisma } from '@prisma/client';

@Injectable()
export class ArticlesService {
  constructor(private prisma: prismaService) {}

  async findAll(query: any) {
  const {
    page = 1,
    limit = 3,
    search,
    category,
    sort = 'latest',
  } = query;
  // console.log('Query parameters:', query); // Debugging log

  const skip = (page - 1) * limit;

  
const where: Prisma.ArticleWhereInput = {
  AND: [
    ...(search
      ? [
          {
            title: {
              contains: search,
              mode: 'insensitive' as const, // ✅ FIX
            },
          },
        ]
      : []),

    ...(category
      ? [
          {
            category: {
              equals: category,
              mode: 'insensitive' as const, // ✅ FIX
            },
          },
        ]
      : []),
  ],
};

  const [data, total] = await Promise.all([
    this.prisma.article.findMany({
      where,
      orderBy: {
        publishedAt: sort === 'latest' ? 'desc' : 'asc',
      },
      skip: Number(skip),
      take: Number(limit),
    }),
    this.prisma.article.count({ where }),
  ]);

  return {
    data,
    total,
    page: Number(page),
    limit: Number(limit),
  };
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