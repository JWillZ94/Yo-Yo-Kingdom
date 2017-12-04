import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../../../models/Profile';

@Injectable()
export class ProfileService {
  profile: Profile;

  constructor(private http: HttpClient) { }

  getProfiles() {
    this.http.get('http://localhost:3000/profiles');
  }


}
