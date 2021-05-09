import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../interfaces/photos.interface';

@Injectable()
export class AlbumService {

    jsonplaceholderURL:string = environment.jsonplaceholder;
    constructor(private readonly _http: HttpClient) { }

    getPhotosByAlbumId(albumId: number):Observable<Photo[]>{
        return this._http.get<Photo[]>(`${this.jsonplaceholderURL}/albums/${albumId}/photos`);
    }
}