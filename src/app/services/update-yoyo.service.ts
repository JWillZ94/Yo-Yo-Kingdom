import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UpdateYoyoService {
  yoyo: any = {};

  constructor(private http: HttpClient) {

  }

  updateYoYo(id) {
    return this.http.put('api/yoyo/' + this.yoyo.id, this.yoyo, httpOptions);
  }

}
