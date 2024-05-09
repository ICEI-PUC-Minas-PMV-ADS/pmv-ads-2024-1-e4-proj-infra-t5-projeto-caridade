import { Controller, Get, Inject, Injectable } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  @Get()
  async getHello() {
    return this.userClient.send({ cmd: 'HELLO_USER' }, '');
  }
}
