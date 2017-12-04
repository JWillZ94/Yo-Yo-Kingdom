import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-yoyo-detail',
  templateUrl: './yoyo-detail.component.html',
  styleUrls: ['./yoyo-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class YoyoDetailComponent implements OnInit {
  yoyo = {};

  constructor(private http: HttpClient, private route: ActivatedRoute, private inventoryService: InventoryService) {}

  ngOnInit() {
    this.getYoYo(this.route.snapshot.params['id']);
  }

  getYoYo(id) {
    this.inventoryService.getYoYo(id)
      .subscribe(yoyo => this.yoyo = yoyo);
  }

}
