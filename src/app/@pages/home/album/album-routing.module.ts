import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album.component';
import { AlbumComponent as AlbumComponentView } from './album/album.component';

const routes: Routes = [
  { 
    path: '', component: AlbumComponent,
    children:[
      { path: '', component: AlbumComponentView },
      { path: ':id/photos', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule) }
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
