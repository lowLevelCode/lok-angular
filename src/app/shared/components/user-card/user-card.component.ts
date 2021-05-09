import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent{

  @Input() user:IUser;

  @Input() options:UserCardOptions = {
    primaryButtonText:"Editar",
    secondaryButtonText:"Ver Posts",
    onShowPrimaryButton:true,
    onShowSecondaryButton:true
  };

  @Output() onClickPrimaryButton = new EventEmitter<IUser>();
  @Output() onClickSecondaryButton = new EventEmitter<IUser>();

  clickPrimaryButton(user:IUser){
    this.onClickPrimaryButton.emit(user);
  }
  clickSecondaryButton(user:IUser){
    this.onClickSecondaryButton.emit(user);
  }
}


export interface UserCardOptions {
  primaryButtonText:string;
  secondaryButtonText:string;  
  onShowPrimaryButton:boolean;
  onShowSecondaryButton:boolean;
}