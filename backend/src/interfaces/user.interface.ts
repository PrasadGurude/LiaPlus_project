export enum UserRoles {
    ADMIN = 'admin',
    USER = 'user',
}

//check the use of below code
export interface IUserToken {
    id: string;
    role: UserRoles;
}