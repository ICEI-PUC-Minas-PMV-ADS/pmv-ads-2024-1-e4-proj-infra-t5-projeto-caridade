import { AppService } from './app.service';
import { IAuthenticateUserDto, ICreateUserDto } from './app.user.dto';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    create(createUserDto: ICreateUserDto, response: Response): Promise<Response<any, Record<string, any>>>;
    authenticate(authenticateUserDto: IAuthenticateUserDto, response: Response): Promise<Response<any, Record<string, any>>>;
}
