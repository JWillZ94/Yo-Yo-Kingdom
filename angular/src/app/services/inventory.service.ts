import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InventoryService {
  yoyoinfo: any;

  constructor(private http: HttpClient) {
    
  }

  /*getYoYos() {
    return this.http.get('/api/yoyo')
      .map(yoyoinfo => this.yoyoinfo = yoyoinfo.json().data);
  }*/

}
