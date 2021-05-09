import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HomeViewComponent } from './home-view/home-view.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent, children:[
      { path:'', component: HomeViewComponent },
      { path: 'album', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule), canActivate:[AuthGuard] },      
    ] 
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
