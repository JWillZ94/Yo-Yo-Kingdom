import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {

  }

  loginUser(user) {
    this.authenticationService.loginUser(user)
      .subscribe(res => this.router.navigate(['/profile']),
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error) {
          console.log('Front-end error occurred' + err.error.message);
        } else {
          console.log('Back-end error occurred..' + err.status + '..body was..' + err.error);
        }
      });
  }

}
