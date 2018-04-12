import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {
  profiles: any;

  constructor(private http: HttpClient) { }

  getProfiles() {
    return this.http.get('http://localhost:3000/api/profile');
  }


}
