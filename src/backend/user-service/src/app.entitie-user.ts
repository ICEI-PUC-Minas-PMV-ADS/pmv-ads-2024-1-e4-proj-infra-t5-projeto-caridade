import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class User {
  public readonly id?: number 

  @IsString()
  @IsNotEmpty()
  public name: string

  @IsEmail()
  @IsNotEmpty()
  public email: string 

  @IsString()
  @IsNotEmpty()
  public last_name: string

  @IsString()
  @IsNotEmpty()
  public password: string 

}