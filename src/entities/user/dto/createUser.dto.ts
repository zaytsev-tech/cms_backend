import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, {
    message: 'Password length must be more than 6 symbols',
  })
  password: string;
}
