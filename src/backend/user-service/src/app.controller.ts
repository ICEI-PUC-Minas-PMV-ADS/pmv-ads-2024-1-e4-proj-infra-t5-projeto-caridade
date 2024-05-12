import { Body, Controller, Post, Res, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ICreateUserDto } from './app.user.dto';
import { Response } from 'express';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

   @Post()
   async create(@Body(ValidationPipe) createUserDto: ICreateUserDto, @Res() response: Response) {
    try {
      await this.appService.create(createUserDto)
      return response.status(201).send()
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
   }
}
