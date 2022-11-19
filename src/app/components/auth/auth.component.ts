import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/interfaces/auth-response.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  Form: FormGroup | any;

  constructor(private fb: FormBuilder, private _authService: AuthService, private _errorService: ErrorHandlingService, private router: Router) { }

  isLoginPage: boolean= true;
  error: string="";
  ngOnInit(): void {

    this.Form= this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  switchMode(){
    this.isLoginPage= !this.isLoginPage;
  }

  onSubmit(){
    if(this.Form.valid){
      const email= this.Form.value.email;
      const password= this.Form.value.password;
      let authObservable: Observable<AuthResponse>;

      if(this.isLoginPage){
        authObservable= this._authService.logIn(email, password);
      }
      else{
        authObservable=this._authService.signUp(email, password);
      }

      authObservable.subscribe(
        res=> {
        console.log(res);
        this.router.navigate(['home']);
        },
        err=>{
          this.error=err;
         
      })
    }
    else{
      console.log("Input invalid");
    }  
  }
}
