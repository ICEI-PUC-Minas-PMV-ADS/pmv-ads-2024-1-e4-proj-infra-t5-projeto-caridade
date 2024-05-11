export declare class User {
    readonly id?: number;
    name: string;
    email: string;
    last_name: string;
    password: string;
    constructor(props: Omit<User, 'id'>);
}
