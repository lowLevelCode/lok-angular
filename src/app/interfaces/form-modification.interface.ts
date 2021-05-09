import { IUser } from "./user.interface";

export interface FormEditUser {
    isDirty:boolean;
    user:Partial<IUser>;
}