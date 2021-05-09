import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserResponse } from '../interfaces/user.response';
import { UpdateUser } from '../interfaces/update-user.interface';
import { environment } from "../../environments/environment";
import { Post } from '../interfaces/post.interface';

@Injectable()
export class UserService {

  urlReqres:string = environment.reqres;
  jsonplaceholderURL:string = environment.jsonplaceholder;

  constructor(private readonly _http: HttpClient) {}

  getUsersByPage(page:number):Observable<UserResponse> {
    return this._http.get<UserResponse>(`${this.urlReqres}/users?page=${page}`);
  }

  updateUser(id:number, user:Partial<UpdateUser>): Observable<UpdateUser> {
    return this._http.put<UpdateUser>(`${this.urlReqres}/users/${id}`, user);
  }

  getPosts(id:number): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.jsonplaceholderURL}/posts?userId=${id}`);
  }  
}