import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Photo } from 'src/app/interfaces/photos.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserResponse } from 'src/app/interfaces/user.response';
import { UserService } from 'src/app/services/user.service';
import { UserCardOptions } from 'src/app/shared/components/user-card/user-card.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  userResponse:UserResponse;
  options:Partial<UserCardOptions> = {
    primaryButtonText: "Ver Album",
    onShowPrimaryButton:true,
    onShowSecondaryButton:false
  };

  constructor(
    private readonly _router:Router,
    private readonly _userService: UserService,) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    /**
     * en este caso ya sabemos que solamente hay 2 paginas y no hay un metodo get all...
     * para la peticion https://reqres.in/api/users por default no regresa la primera pagina
     */
    const page1 = 1;
    const page2 = 2;

    let request1 = this._userService.getUsersByPage(page1);
    let request2 = this._userService.getUsersByPage(page2);

    forkJoin([request1, request2]).subscribe((results:UserResponse[]) => {        
      this.userResponse = results[0];
      this.userResponse.data.push(...results[1].data);
    });
  }

  onClickPrimaryButton(user:IUser) {    
    const {id} = user;
    this._router.navigate([`/home/album/${id}/photos`]);
  }
}
