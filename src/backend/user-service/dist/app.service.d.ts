import { IAuthenticateUserDto, ICreateUserDto, IJwtoken, IUpdateUser } from './app.user.dto';
import { User } from './app.entitie-user';
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
    authUser(token: string): Promise<User>;
    getById(id: number): Promise<User>;
    delete(token: string): Promise<void>;
    update(data: IUpdateUser): Promise<User>;
}
