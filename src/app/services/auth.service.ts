import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IToken } from '../interfaces/token.interface';
import { Observable } from 'rxjs';
import { TOKEN_ID } from '../constantes/const';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  constructor(private readonly _router: Router, private readonly _http: HttpClient) {}

  login(email: string, password:string):Observable<IToken> {
    return this._http.post<IToken>("https://reqres.in/api/login", {email, password});
  } 

  logout() {    
    localStorage.removeItem(TOKEN_ID);
    this._router.navigate(['/login']);
  }

  isLoggedIn():boolean {
      return localStorage.getItem(TOKEN_ID) ? true : false;
  }

  setLoggedInToken(token:string) {
    localStorage.setItem(TOKEN_ID, token); // guardamos el token
  }
}