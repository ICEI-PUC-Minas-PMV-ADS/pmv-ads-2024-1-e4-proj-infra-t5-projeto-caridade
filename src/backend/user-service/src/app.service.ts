import { IAuthenticateUserDto, ICreateUserDto, IJwtoken } from './app.user.dto';
import { User } from './app.entitie-user';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'
import { IJwtokenProvider } from './providers/IJwtokenProvider';

@Injectable()
export class AppService {
  constructor(
    private jwtokenProvider: IJwtokenProvider
  ) {}

  private prisma = new PrismaClient();

  async findByEmail(email: string) {
    const user = await this.prisma.user.findFirst({
        where: {
            email
        }
    })
    return user
  }

  async create(data: ICreateUserDto): Promise<void> {

    const userAlreadyExist = await this.findByEmail(data.email)

    if (userAlreadyExist) throw new Error('User already exist.')
        
    const {email, name, last_name, password } = data

    const passwordCrypt = await bcrypt.hash(password, 10)

    const user = new User({
        email,
        name,
        last_name,
        password: passwordCrypt
    })
    
    await this.prisma.user.create({
      data: {
        name: user.name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
      },
    });
  }

  
  async authenticate(data: IAuthenticateUserDto): Promise<IJwtoken> {
    
    if(!data) throw new Error("Invalid fields")

    const findUser = await this.findByEmail(data.email)

    if (!findUser) throw new Error("User cannot be find")
    
    const isMatch = await bcrypt.compare(data.password, findUser.password)
    
    if (!isMatch) throw new Error("invalid password")

    const token = this.jwtokenProvider.createToken(findUser.id!)
    
    return token
  }
}