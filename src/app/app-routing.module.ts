import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full' },
  { path: 'login', loadChildren: () => import('./@pages/login/login.module').then(m => m.LoginModule), canActivate:[NoAuthGuard] },  
  { path: 'home', loadChildren: () => import('./@pages/home/home.module').then(m => m.HomeModule), canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
