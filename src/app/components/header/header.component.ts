import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService) { }
   isLoggedIn: boolean= false;

  ngOnInit(): void {
    this._authService.user.subscribe(res=>{
      this.isLoggedIn= !res? false: true;
    })
  }

  onSignOut(){
    this._authService.signOut();
  }
}
