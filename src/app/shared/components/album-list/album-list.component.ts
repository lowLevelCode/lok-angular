import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photos.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  @Input() photos:Photo[];
  constructor() { }

  ngOnInit(): void {
  }

}
