import { IAuthenticateUserDto, ICreateUserDto, IJwtoken, IUpdateUser } from './app.user.dto';
import { User } from './app.entitie-user';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(
    private jwtokenProvider: JwtService
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

  
  async authenticate(data: IAuthenticateUserDto): Promise<String> {
    

    if(!data) throw new Error("Invalid fields")

    const findUser = await this.findByEmail(data.email)

    if (!findUser) throw new Error("User cannot be find")
    
    const isMatch = await bcrypt.compare(data.password, findUser.password)
    
    if (!isMatch) throw new Error("invalid password")

    const token = await this.jwtokenProvider.signAsync({id: findUser.id!})
    
    return token
  }

  async authUser(token: string): Promise<User> {
    const bearerToken = token.split(' ')[1]
    if (!bearerToken) throw new Error("Invalid token")

    const verifyToken = this.jwtokenProvider.verify(bearerToken)

    if (!verifyToken.id) throw new Error("Invalid user")

    const user = await this.getById(verifyToken.id);

    return user
  }

  async getById(id: number): Promise<User> {
    return await this.prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        email: true,
        id: true,
        last_name: true,
        name: true,
        password: false,
      }
    })
  }

  async delete(token: string): Promise<void> {
    const loggedUser = await this.authUser(token)

    if(!loggedUser) throw new Error('Invalid user')

    await this.prisma.user.delete({
      where: {
        id: loggedUser.id,
      }
    })
  }

  async update(data: IUpdateUser): Promise<User> {
    const loggedUser = await this.authUser(data.token)

    if(!loggedUser) throw new Error('Invalid user')

    return await this.prisma.user.update({
      where: {
        id: loggedUser.id
      },
      data: {
        last_name: data.user.last_name,
        name: data.user.name,
        password: data.user.password ? data.user.password : loggedUser.password,
      }
    })
  }
}