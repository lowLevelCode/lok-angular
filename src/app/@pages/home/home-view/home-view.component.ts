import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormEditUser } from 'src/app/interfaces/form-modification.interface';
import { Post, PostInputDialog } from 'src/app/interfaces/post.interface';
import { UpdateUser } from 'src/app/interfaces/update-user.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserResponse } from 'src/app/interfaces/user.response';
import { SweetAlertService } from 'src/app/services/dialogs.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { EditUserDialogComponent } from 'src/app/shared/components/dialogs/edit-user-dialog/edit-user-dialog.component';
import { PostsUserDialogComponent } from 'src/app/shared/components/dialogs/posts-user-dialog/posts-user-dialog.component';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  userResponse: UserResponse;

  constructor(
    private readonly _userService: UserService,
    private readonly _postService: PostService,
    private readonly _dialog:MatDialog,
    private readonly _sweetAlertService:SweetAlertService) { }

  ngOnInit(): void {    
    const defaultPage = 1;
    this.setUsers(defaultPage);
  }
  
  setUsers(page:number){
    this._userService.getUsersByPage(page).subscribe(
      (user:UserResponse) => {
        this.userResponse = user;        
      }
    );
  }

  onPaginate(page:number){
    this.setUsers(page);
  }

  onClickPrimaryButton(userInput:IUser) {        
    const dialogRef = this._dialog.open(EditUserDialogComponent, {   
      width:"30%",
      data: userInput
    });

    dialogRef.afterClosed().subscribe((formEditUser:FormEditUser) => {       
      if(!formEditUser.isDirty) // el formulario de el dialog no fue modificado no hace nada
        return;

      const user = formEditUser.user;    // en esta parte la api no guarda los datos de forma real
      const updateUser:Partial<UpdateUser> = {
        name: `${user.first_name} ${user.last_name}`, 
        job:'any job works'
      };

      this._userService.updateUser(user.id, updateUser).subscribe((updateUser:UpdateUser) => {
        // se supone que aqui actualiza los datos de el user en la (API).. pero en realidad no es asi.
        console.log("fake actualizacion de datos",updateUser);
        let newUser = this.userResponse.data.find(u=> u.id == user.id);

        /** Modificamos el objeto mediante referencia */
        newUser.first_name = user.first_name;
        newUser.last_name = user.last_name;
        newUser.email = user.email;
      });
    });
  }

  onClickSecondaryButton(user:IUser) {
    const {id,avatar} = user;
    this._userService.getPosts(id).subscribe((posts:Post[]) => {
      const postInputDialog:PostInputDialog =  {
        avatarImg:avatar,
        posts
      };
      const dialogRef = this._dialog.open(PostsUserDialogComponent, {
        width: '50%',
        data: postInputDialog
      });
  
      dialogRef.afterClosed().subscribe((idPost:number) => {   // esta al pendiente de cuando se cierra el modal
        if(!idPost) // si es indefinido o null simplemente no hacemos la peticion
          return;

        this._postService.deletePost(idPost).subscribe(data=>{ // aqui hace la supuesta eliminacion de el post
          this._sweetAlertService.success("Post Eliminado con exito");
        });
      });

    });
  }

}
