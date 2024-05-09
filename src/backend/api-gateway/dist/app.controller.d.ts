import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
export declare class AppController {
    private readonly appService;
    private readonly userClient;
    constructor(appService: AppService, userClient: ClientProxy);
    getHello(): Promise<Observable<any>>;
}
