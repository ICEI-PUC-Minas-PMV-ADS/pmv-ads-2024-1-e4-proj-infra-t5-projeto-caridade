import { Body, Controller, Get, HttpCode, Post, Put, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { ICreateUserDto, IUpdateUserDto } from './app.user.dto';
import { Response } from 'express';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
   async create(@Body() createUserDto: ICreateUserDto, @Res() response: Response) {
    console.log("teste");
    try {
      await this.appService.create(createUserDto)
      return response.status(201).send()
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
   }

  @Put()
  async update(@Body() updateUserDto: IUpdateUserDto, @Res() response: Response) {
    try {
      await this.appService.update(updateUserDto)
      return response.status(201).send()
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

}
