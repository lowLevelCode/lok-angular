import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserCardModule } from 'src/app/shared/components/user-card/user-card.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AlbumService } from 'src/app/services/album.service';
import { AlbumListComponent } from '../../../shared/components/album-list/album-list.component';
import { AlbumComponent as AlbumComponentView } from './album/album.component';

@NgModule({
  declarations: [
    AlbumComponent,    
    AlbumListComponent,
    AlbumComponentView,    
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MatCardModule, 
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    UserCardModule,
    MatDialogModule,
  ],
  providers:[AlbumService]
})
export class AlbumModule { }
