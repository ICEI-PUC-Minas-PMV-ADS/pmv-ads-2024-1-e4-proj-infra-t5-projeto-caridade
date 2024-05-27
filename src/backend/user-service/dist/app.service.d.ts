import { IAuthenticateUserDto, ICreateUserDto, IJwtoken } from './app.user.dto';
import { IJwtokenProvider } from './providers/IJwtokenProvider';
export declare class AppService {
    private jwtokenProvider;
    constructor(jwtokenProvider: IJwtokenProvider);
    private prisma;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        name: string;
        last_name: string;
        password: string;
    }>;
    create(data: ICreateUserDto): Promise<void>;
    authenticate(data: IAuthenticateUserDto): Promise<IJwtoken>;
}
