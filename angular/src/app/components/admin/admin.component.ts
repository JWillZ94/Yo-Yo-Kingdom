import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  yoyo: any = {};


  constructor(private http: HttpClient, private router: Router, private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  addYoYo() { // works now, had to make it serviceName.variableName.property in the template
    this.inventoryService.addYoYo()
      .subscribe(res => this.router.navigate(['/yo-yos']),
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error) {
          console.log('Front-end error occurred' + err.error.message);
        } else {
          console.log('Back-end error occurred..' + err.status + '..body was..' + err.error);
        }
      });
  }

  updateYoYo(id) { // works
    this.inventoryService.updateYoYo(id)
      .subscribe(res => this.router.navigate(['/yo-yos']),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Front-end error occurred' + err.error.message);
        } else {
          console.log('Back-end error occurred..' + err.status + '..body was..' + err.error);
        }
      });
  }

  deleteYoYo() { // works
    this.inventoryService.deleteYoYo()
      .subscribe(res => this.router.navigate(['/yo-yos']),
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error) {
          console.log('Front-end error occurred' + err.error.message);
        } else {
          console.log('Back-end error occurred..' + err.status + '..body was..' + err.error);
        }
      });
  }

}
