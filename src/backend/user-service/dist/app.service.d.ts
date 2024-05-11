import { ICreateUserDto, IUpdateUserDto } from './app.user.dto';
export declare class AppService {
    private prisma;
    getHello(): string;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        name: string;
        last_name: string;
        password: string;
    }>;
    create(data: ICreateUserDto): Promise<void>;
    update(data: IUpdateUserDto): Promise<void>;
}
