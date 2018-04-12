import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AddToCartService } from '../../services/add-to-cart.service';
import { InventoryService } from '../../services/inventory.service';
import { CreateYoyoService } from '../../services/create-yoyo.service';
import { UpdateYoyoService } from '../../services/update-yoyo.service';
import { DeleteYoyoService } from '../../services/delete-yoyo.service';
import { CartComponent } from '../cart/cart.component';

@Component({ // Child to CartComponent
  selector: 'app-yo-yos',
  templateUrl: './yo-yos.component.html',
  styleUrls: ['./yo-yos.component.css']
})
export class YoYosComponent implements OnInit {
  yoyos: any = [];
  yoyoCart: any = [];
  yoyo: any = {};


  constructor( // uses HttpClient for this component, in this example, connecting to the back-end
    private http: HttpClient,
    private inventoryService: InventoryService,
    private createYoYoService: CreateYoyoService,
    private updateYoYoService: UpdateYoyoService,
    private deleteYoYoService: DeleteYoyoService,
    private addToCartService: AddToCartService
  ) {}

  ngOnInit() {
    this.getYoYos();
  }

  getYoYos() {
    this.inventoryService.getYoYos()
      .subscribe(yoyos => this.yoyos = yoyos);
  }

  // addToCart(yoyo) {
  //   this.addToCartService.addToCart(this.yoyo)
  //     .subscribe(yoyo => this.yoyo = yoyo,
  //     (err: HttpErrorResponse) => {
  //       if(err.error instanceof Error) {
  //         console.log('Front-end error occurred' + err.error.message);
  //       } else {
  //         console.log('Back-end error occurred..' + err.status + '..body was..' + err.error);
  //       }
  //     });
  // }

}
