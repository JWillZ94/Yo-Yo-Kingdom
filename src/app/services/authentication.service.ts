import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  user: any = {};
  profile: any;

  constructor(private http: HttpClient) { }

  getUser() { // gets all users' info
    return this.http.get('http://localhost:3000/api/user');
  }

  registerUser() {
    return this.http.post('http://localhost:3000/api/user', this.user);
  }

  makeProfile(profile) {
    return this.http.post('http://localhost:3000/api/user', profile);
  }

  loginUser(user) {
    return this.http.post('http://localhost:3000/api/user/login', user);
  }

}
