import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-yo-yos',
  templateUrl: './yo-yos.component.html',
  styleUrls: ['./yo-yos.component.css']
})
export class YoYosComponent implements OnInit {
  yoyos: any;


  constructor(private http: HttpClient) { // uses HttpClient for this component, in this example, connecting to the back-end
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/yoyo').subscribe( // Where Im grabbing the data from
      data => { // The data thats going to be displayed in the template
        this.yoyos = data;
      },
      (err: HttpErrorResponse) => { // Error handling, splits into client-side problems or server-side problems
        if (err.error instanceof Error) {
          console.log('Client-side error happened');
        }
        console.log('Server-side error happened');
      }
    )
  }
}
