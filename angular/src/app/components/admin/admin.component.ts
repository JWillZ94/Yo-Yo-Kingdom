import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  yoyo = {};

  constructor(private http: HttpClient, private router: Router, private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  addYoYo() { // Transfer to service
    this.http.post('http://localhost:3000/yoyo', this.yoyo)
      .subscribe(res => this.router.navigate(['/yo-yos']));
  }

  updateYoYo(id) { // cant get it to change the yoyo
    this.inventoryService.updateYoYo(this.yoyo.id)
      .subscribe(res => this.router.navigate(['/yoyo-details/' + this.yoyo.id]));
  }

  deleteYoYo(id) {
    this.inventoryService.deleteYoYo(this.yoyo.id)
      .subscribe(res => this.router.navigate(['/yo-yos']));
  }

}
