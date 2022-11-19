import { HttpClient } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Subject, tap } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { User } from '../models/user.model';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private errService: ErrorHandlingService, private router: Router) { }

  API_KEY="AIzaSyBq7kCbXemkamJiWD2BKBZo3UcsvXg910Q";
  user= new BehaviorSubject<any>(null);


  signUp(email: any, password: any){
    return this.httpClient.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+this.API_KEY, {
        email: email,
        password: password, 
        returnSecureToken: true
    }).pipe(catchError(err=> {
      return this.errService.handleError(err);
    }),
    tap(res=>{
      this.authenticatedUser(res.email, res.localId, res.idToken, +res.expiresIn);
    }))
  }

  logIn(email: any, password: any){
    return this.httpClient.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+this.API_KEY, {
        email: email,
        password: password, 
        returnSecureToken: true
    }).pipe(catchError(err=> {
      return this.errService.handleError(err);
    }),
    tap(res=>{
      this.authenticatedUser(res.email, res.localId, res.idToken, +res.expiresIn);
    }))
  }

  autoSignIn(){
    let userData=  JSON.parse(localStorage.getItem('userData')+"");
    if(!userData)
      return;
    const loggedInUser= new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))

    if(loggedInUser.token)
      this.user.next(loggedInUser);
  }

  signOut(){
    this.user.next(null);
    this.router.navigate(['sign-in']);
    localStorage.removeItem('userData');
  }

  authenticatedUser(email: string, userId: string, token: string, expiresIn: number){

    const expiryDate= new Date(new Date().getTime()+ expiresIn*1000)
    const user= new User(email, userId, token, expiryDate);
    console.log( user);
    this.user.next(user); //Storing data in Subject
    localStorage.setItem('userData', JSON.stringify(user));
  }

}
