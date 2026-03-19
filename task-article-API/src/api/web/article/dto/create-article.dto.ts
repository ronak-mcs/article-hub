import { IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  excerpt: string;
}