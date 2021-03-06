import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InventoryService {
  yoyo: any = {};

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  getYoYos() { // Grabs the yoyos from the back-end API and brings them to this service, works
    return this.http.get('api/yoyo');
  }

  getYoYo(id) { // works
    return this.http.get('api/yoyo/' + id);
  }

}
