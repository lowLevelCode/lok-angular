import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserCardComponent } from './user-card.component';


@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        FlexLayoutModule
    ],
    exports: [UserCardComponent],
    declarations: [UserCardComponent],    
})
export class UserCardModule { }
