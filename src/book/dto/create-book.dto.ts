// structure of book input
//importin class validator for validation
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { IsOptional } from 'class-validator/types/decorator/decorators';
export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsString()
  @IsOptional()
  author: string;
}
