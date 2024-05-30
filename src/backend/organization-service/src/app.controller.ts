import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('/get-all')
  @MessagePattern({ cmd: 'GET_ALL_ORGANIZATIONS' })
  getAll() {
    return this.appService.getAll();
  }

  @Get('/get-by-id/:id')
  @MessagePattern({ cmd: 'GET_BY_ID_ORGANIZATIONS' })
  async getById(@Param() { id }: any) {
    return this.appService.getById(id);
  }

  'localhost?name=sdasdas&id=123&theme=asdas';
  'localhost/nome/tema/país';

  @Get('/get-by-params')
  @MessagePattern({ cmd: 'GET_BY_PARAMS' })
  async getByParams(
    @Query('country') country?: string,
    @Query('theme') theme?: string,
    @Query('name') name?: string,
  ) {
    return this.appService.getByParam({
      name: name?.toLowerCase(),
      theme: theme?.toLowerCase(),
      country: country?.toLowerCase(),
    });
  }

  @Get('/get-by-country/:countryCode')
  @MessagePattern({ cmd: 'GET_BY_COUNTRY_ORGANIZATIONS' })
  async getByCountry(@Param() { countryCode }: any) {
    return this.appService.getByCountry(countryCode);
  }

  @Get('/get-by-theme/:themeCode')
  @MessagePattern({ cmd: 'GET_BY_THEME_ORGANIZATIONS' })
  async getByTheme(@Param() { themeCode }: any) {
    return this.appService.getByTheme(themeCode);
  }
}
