import { IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  body: string;
}