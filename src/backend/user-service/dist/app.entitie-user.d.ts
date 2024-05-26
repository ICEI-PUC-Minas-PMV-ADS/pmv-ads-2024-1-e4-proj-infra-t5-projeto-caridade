export declare class User {
    readonly id?: number;
    email: string;
    name: string;
    last_name: string;
    password?: string;
    constructor(props: Omit<User, 'id'>);
}
