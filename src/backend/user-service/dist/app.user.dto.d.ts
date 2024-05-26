export interface ICreateUserDto {
    name: string;
    last_name: string;
    email: string;
    password: string;
}
export interface IAuthenticateUserDto {
    email: string;
    password: string;
}
export interface IJwtoken {
    token: string;
}
export interface IUpdateUser {
    token: string;
    user: {
        name: string;
        last_name: string;
        password?: string;
    };
}
