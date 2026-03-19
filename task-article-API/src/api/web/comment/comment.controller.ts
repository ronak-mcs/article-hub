import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CommentsService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('api/articles/:slug/comments')
export class CommentsController {
  constructor(private service: CommentsService) {}

  @Get()
  findAll(@Param('slug') slug: string) {
    return this.service.findByArticle(slug);
  }

  @Post()
  create(
    @Param('slug') slug: string,
    @Body() dto: CreateCommentDto,
  ) {
    return this.service.create(slug, dto);
  }
}