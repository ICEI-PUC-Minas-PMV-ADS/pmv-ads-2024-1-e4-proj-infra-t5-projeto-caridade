import { ICreateUserDto } from './app.user.dto';
import { User } from './app.entitie-user';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { validate } from 'class-validator';

@Injectable()
export class AppService {
  private prisma = new PrismaClient();

  async findByEmail(email: string) {
    const user = await this.prisma.user.findFirst({
        where: {
            email
        }
    })
    return user
  }

  async create(data: ICreateUserDto): Promise<User> {
    
    const findByEmail = await this.findByEmail(data.email)
    
    if (findByEmail) throw new Error('User already exist')

    const errors = await validate(data);

    if (errors.length > 0) {
      throw new Error('Validation failed');
    } else {
      return this.prisma.user.create({
        data: {
          name: data.name,
          last_name: data.last_name,
          email: data.email,
          password: data.password,
        },
      });
    }
  }
}