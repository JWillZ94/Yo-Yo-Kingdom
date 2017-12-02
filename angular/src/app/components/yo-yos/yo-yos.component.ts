import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AddToCartService } from '../../services/add-to-cart.service';
import { InventoryService } from '../../services/inventory.service';
import { CartComponent } from '../cart/cart.component';

@Component({ // Child to CartComponent
  selector: 'app-yo-yos',
  templateUrl: './yo-yos.component.html',
  styleUrls: ['./yo-yos.component.css']
})
export class YoYosComponent implements OnInit {
  yoyos: any;
  yoyoCart: any = [];


  constructor(private http: HttpClient, private inventoryService: InventoryService, private addToCartService: AddToCartService) { // uses HttpClient for this component, in this example, connecting to the back-end
  }

  ngOnInit() {
    this.getYoYos();

    //this.yoyoCart = this.addToCartService.addToCart([]);
  }

  getYoYos() {
    this.inventoryService.getYoYos()
      .subscribe(yoyos => this.yoyos = yoyos);
  }

  /*addToCart(yoyo) {
    this.yoyoCart.unshift(yoyo);
  }*/

}