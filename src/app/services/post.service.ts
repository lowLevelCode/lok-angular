import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostService {
    
    jsonplaceholderURL:string = environment.jsonplaceholder;

    constructor(private readonly _http: HttpClient) {}

    deletePost(id:number) {
        return this._http.delete(`${this.jsonplaceholderURL}/posts/${id}`);
    }
}