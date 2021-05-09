import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Photo } from 'src/app/interfaces/photos.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserResponse } from 'src/app/interfaces/user.response';
import { AlbumService } from 'src/app/services/album.service';
import { UserService } from 'src/app/services/user.service';
import { UserCardOptions } from 'src/app/shared/components/user-card/user-card.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  constructor(){}
}
