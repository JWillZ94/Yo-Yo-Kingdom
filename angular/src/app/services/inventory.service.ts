import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class InventoryService {

  constructor(private http: HttpClient) {

  }

  getYoYos() { // Grabs the yoyos from the back-end API and brings them to this service
    return this.http.get('http://localhost:3000/yoyo');
  }

  getYoYo() {

  }

}
