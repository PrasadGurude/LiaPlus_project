export enum UserRoles {
    ADMIN = 'admin',
    USER = 'user',
}

export enum AuthorizedRoles {
    ADMIN = 'admin'
}

//check the use of below code
export interface IUserToken {
    id: string;
    role: UserRoles;
}