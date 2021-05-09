import { IUser } from "./user.interface";

export interface UserResponse{
    page:number;
    per_page:number;
    total:number;
    total_pages:number;
    data: IUser[];
    support:Support;
}

export interface Support {
    url:string;
    text:string;
}