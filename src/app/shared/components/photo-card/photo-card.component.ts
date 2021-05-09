import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photos.interface';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html'  
})
export class PhotoCardComponent {

  imgUrl:string;
  _photo:Photo;

  @Input() set photo(photo: any) {
    this._photo = photo;
    this.imgUrl = this._photo.url;

    // valida si esta en un dispositivo mobil... esto permite que colocar la imagen de el tamaño correcto
    this._responsiveService.getMobileSizeState().subscribe((state:BreakpointState)=>{ 
      if(state.breakpoints[Breakpoints.XSmall] || state.breakpoints[Breakpoints.Small])
        this.imgUrl = this._photo.thumbnailUrl;
    });
  }

  constructor(private readonly _responsiveService:ResponsiveService) { }
}
