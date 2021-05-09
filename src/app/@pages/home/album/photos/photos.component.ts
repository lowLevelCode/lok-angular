import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from 'src/app/interfaces/photos.interface';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos:Observable<Photo[]>;

  constructor(
    private _route: ActivatedRoute,
    private readonly _albumService:AlbumService) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');    
    this.photos  = this._albumService.getPhotosByAlbumId(Number(id)).pipe(map(p=>p));    
  }

}

