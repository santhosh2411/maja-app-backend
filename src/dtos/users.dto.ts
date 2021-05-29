import { IsString, IsEmail, IsBoolean, IsDate, IsOptional, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsOptional()
  public email: string;

  @IsString()
  public name: string;

  @IsString()
  @IsOptional()
  public bio: string;

  @IsString()
  public mobileNo: string;

  @IsBoolean()
  @IsOptional()
  public isActive: boolean;

  @IsDateString()
  @IsOptional()
  public dob: Date;

  @IsString()
  public password: string;
}
