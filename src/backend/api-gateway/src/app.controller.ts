import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('REVIEW_SERVICE') private readonly reviewClient: ClientProxy,
    @Inject('ORGANIZATION_SERVICE') private readonly organizationService: ClientProxy,
  ) {}

  @Get('/user')
  async getHello() {
    return this.userClient.send({ cmd: 'HELLO_USER' }, '');
  }

  @Get('/review')
  async getReview() {
    return this.reviewClient.send({ cmd: 'HELLO_REVIEW' }, '');
  }

  @Get('/organization')
  async getOrganization() {
    return this.organizationService.send({ cmd: 'HELLO_ORGANIZATION' }, '');
  }
}
