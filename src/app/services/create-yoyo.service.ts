import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CreateYoyoService {
  yoyo: any = {};

  constructor(private http: HttpClient) {

  }

  addYoYo() {
    return this.http.post('api/yoyo', this.yoyo);
  }

}
