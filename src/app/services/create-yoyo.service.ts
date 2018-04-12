import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CreateYoyoService {
  yoyo: any = {};

  constructor(private http: HttpClient) {

  }

  addYoYo() { 
    return this.http.post('http://localhost:3000/api/yoyo', this.yoyo);
  }

}
