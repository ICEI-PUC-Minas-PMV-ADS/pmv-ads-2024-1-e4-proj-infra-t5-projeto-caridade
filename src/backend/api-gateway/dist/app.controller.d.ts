import { ClientProxy } from '@nestjs/microservices';
export declare class AppController {
    private readonly userClient;
    private readonly reviewClient;
    private readonly organizationService;
    constructor(userClient: ClientProxy, reviewClient: ClientProxy, organizationService: ClientProxy);
    getHello(): Promise<import("rxjs").Observable<any>>;
    getReview(): Promise<import("rxjs").Observable<any>>;
    getOrganization(): Promise<import("rxjs").Observable<any>>;
}
