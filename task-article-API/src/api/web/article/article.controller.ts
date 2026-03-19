import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ArticlesService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('api/articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.service.findOne(slug);
  }

  @Post()
  create(@Body() dto: CreateArticleDto) {
    return this.service.create(dto);
  }
}