import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserCardComponent } from 'src/app/shared/components/user-card/user-card.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { UserService } from 'src/app/services/user.service';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';
import { EditUserDialogComponent } from '../../shared/components/dialogs/edit-user-dialog/edit-user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsUserDialogComponent } from '../../shared/components/dialogs/posts-user-dialog/posts-user-dialog.component';
import { PostItemComponent } from '../../shared/components/post-item/post-item.component'
import { MatListModule } from '@angular/material/list';
import { SweetAlertService } from 'src/app/services/dialogs.service';
import { PostService } from 'src/app/services/post.service';
import { UserCardModule } from 'src/app/shared/components/user-card/user-card.module';

@NgModule({
  declarations: [
    HomeComponent,    
    PaginatorComponent,
    HomeViewComponent,
    EditUserDialogComponent,
    PostsUserDialogComponent,
    PostItemComponent,
  ],  
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,    
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    UserCardModule 
  ],
  providers:[UserService, SweetAlertService, PostService]
})
export class HomeModule { }
