import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: any = {};
  profile: any;

  constructor(private authService: AuthenticationService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  registerUser() { // works
    this.authService.registerUser()
      .subscribe(res => this.router.navigate(['/profile']),
        (err: HttpErrorResponse) => {
          if(err.error instanceof Error) {
            console.log('Front-end error occurred' + err.error.message);
          } else {
            console.log('Back-end error occurred..' + err.status + '..body was..' + err.error);
          }
        }
      );
  }

  makeProfile(profile) {
    this.authService.makeProfile(profile)
      .subscribe(profile => this.profile = profile,
        (err: HttpErrorResponse) => {
          if(err.error instanceof Error) {
            console.log('Front-end error occurred' + err.error.message);
          } else {
            console.log('Back-end error occurred..' + err.status + '..body was..' + err.error);
          }
        }
      );
  }

}
