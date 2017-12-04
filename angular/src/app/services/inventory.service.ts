import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { YoYo } from '../../../models/YoYo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InventoryService {
  yoyo: YoYo;

  constructor(private http: HttpClient) {

  }

  getYoYos() { // Grabs the yoyos from the back-end API and brings them to this service, works
    return this.http.get('http://localhost:3000/yoyo');
  }

  getYoYo(id) { // works
    return this.http.get('http://localhost:3000/yoyo/' + id);
  }

  addYoYo() {
    this.http.post('http://localhost:3000/yoyo', this.yoyo);
  }

  updateYoYo(id) {
    return this.http.put('http://localhost:3000/yoyo/' + id, this.yoyo, httpOptions);
  }

  deleteYoYo(id) {
    return this.http.delete('http://localhost:3000/yoyo/' + id, this.yoyo);
  }

}
