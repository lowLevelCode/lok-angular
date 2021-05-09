import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOKEN_ID } from 'src/app/constantes/const';
import { IToken } from 'src/app/interfaces/token.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _authService: AuthService, 
    private readonly _fb:FormBuilder, 
    private readonly _router:Router) {

    this.form = _fb.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required),  
    });
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  onSubmit() {    
    if(this.form.invalid){
      console.error("Form invalido");
      return;
    }

    this._authService.login(this.form.value.email, this.form.value.password).subscribe(
      (data:IToken)=> { // nos logeamos        
        if(!data?.token){ // clausula de guardia
          alert("No hay token de retorno");
          return;
        }

        this._authService.setLoggedInToken(data.token);
        this._router.navigate(['home']); 
      },
      error=> {
        alert("User not found");
      }
    );
  }
  @Input() 
  error: string | boolean;
  

  ngOnInit() {
  }

}
