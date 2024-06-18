import { Body, Controller, Delete, Get, Headers, Post, Put, Res, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { IAuthenticateUserDto, ICreateUserDto } from './app.user.dto';
import { Response } from 'express';
import { User } from './app.entitie-user';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() createUserDto: ICreateUserDto, @Res() response: Response) {
    try {
      await this.appService.create(createUserDto)
      return response.status(201).send()
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  @Post('/signin')
  async authenticate(@Body() authenticateUserDto: IAuthenticateUserDto, @Res() response: Response) {
    try {
      const token = await this.appService.authenticate(authenticateUserDto)
      return response.status(201).send(token)
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  @Get('/auth')
  async authUser(@Headers('Authorization') token: string, @Res() response: Response) {
    try {
      const user = await this.appService.authUser(token)
      return response.status(201).send(user)
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

  @Delete()
  async delete(@Headers('Authorization') token: string, @Res() response: Response) {
    try {
      await this.appService.delete(token)
      return response.status(201).send()
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }

  }

  @Put()
  async update(@Headers('Authorization') token: string, @Body() user: User, @Res() response: Response) {
    try {
      await this.appService.update({user, token})
      return response.status(201).send()
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}

