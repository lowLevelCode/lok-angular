import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormEditUser } from 'src/app/interfaces/form-modification.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],  
})
export class EditUserDialogComponent implements OnInit {

  form:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userData: IUser,
    private readonly _fb:FormBuilder,
    private readonly _responsiveService:ResponsiveService) {

      this.dialogRef.disableClose = true;
      this.form = this._fb.group({
        firstName: new FormControl(this.userData.first_name, Validators.required),
        lastName: new FormControl(this.userData.last_name, Validators.required),
        email: new FormControl(this.userData.email, Validators.compose([Validators.required, Validators.email])),
      });
    }

  ngOnInit():void {
    this._responsiveService.getMobileSizeState().subscribe((state:BreakpointState)=>{
      if(state.breakpoints[Breakpoints.XSmall] || state.breakpoints[Breakpoints.Small])
        this.dialogRef.updateSize("80%");
    });  
  }

  onSubmit() { 
    if(this.form.invalid){
      console.error("formulario invalido");
      return;
    }
    const isDirty = !this.form.pristine; // true si el form no se le ha modificado nada.
    const formEditUser:FormEditUser = { 
      isDirty, 
      user:{
        id: this.userData.id,
        first_name: this.form.get('firstName').value,
        last_name: this.form.get('lastName').value,
        email: this.form.get('email').value,
      } 
    };
    this.dialogRef.close(formEditUser);
  }

  onCancel() {
    const formEditUser:FormEditUser = { isDirty:false, user:null };
    this.dialogRef.close(formEditUser);
  }
}