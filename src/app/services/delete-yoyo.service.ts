import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DeleteYoyoService {
  yoyo: any = {};

  constructor(private http: HttpClient) {

  }

  deleteYoYo() {
    return this.http.delete('http://localhost:3000/api/yoyo/' + this.yoyo.id, this.yoyo);
  }

}
