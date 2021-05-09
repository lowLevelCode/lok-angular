import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { PhotoCardComponent } from 'src/app/shared/components/photo-card/photo-card.component';


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoCardComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
