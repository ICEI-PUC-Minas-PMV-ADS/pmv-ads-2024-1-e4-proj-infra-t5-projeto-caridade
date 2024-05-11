import { Injectable } from '@nestjs/common';
import { ICreateUserDto } from './app.user.dto';
import { PrismaClient } from '@prisma/client';
import { User } from './app.entitie-user';

@Injectable()
export class AppService {
  private prisma = new PrismaClient()

  getHello(): string {
    return 'Hello World! User Service';
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findFirst({
        where: {
            email
        }
    })

    return user
  }

  async create(data: ICreateUserDto): Promise<void> {
    if (!data) throw new Error('User is not valid')

    const findByEmail = await this.findByEmail(data.email)

    if (findByEmail) throw new Error('User already exist')

    const user = new User(data)

    await this.prisma.user.create({
      data: {
        email: user.email,
        last_name: user.last_name,
        name: user.name,
        password: user.password,
      }
    })
  }
}
