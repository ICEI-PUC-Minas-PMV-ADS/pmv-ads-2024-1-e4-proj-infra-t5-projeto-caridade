import { ICreateUserDto } from './app.user.dto';
import { User } from './app.entitie-user';
export declare class AppService {
    private prisma;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        name: string;
        last_name: string;
        password: string;
    }>;
    create(data: ICreateUserDto): Promise<User>;
}
