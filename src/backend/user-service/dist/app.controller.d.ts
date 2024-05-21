import { AppService } from './app.service';
import { ICreateUserDto, IUpdateUserDto } from './app.user.dto';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    create(createUserDto: ICreateUserDto, response: Response): Promise<Response<any, Record<string, any>>>;
    update(updateUserDto: IUpdateUserDto, response: Response): Promise<Response<any, Record<string, any>>>;
}
