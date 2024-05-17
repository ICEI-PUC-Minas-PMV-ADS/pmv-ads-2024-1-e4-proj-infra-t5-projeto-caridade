import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @MessagePattern({ cmd: 'HELLO_ORGANIZATION' })
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
}
