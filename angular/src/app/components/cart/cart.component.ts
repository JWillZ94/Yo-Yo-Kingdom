import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../../services/add-to-cart.service';

@Component({ // Parent to YoYosComponent
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  yoyoCart: any;


  constructor(private addToCartService: AddToCartService) { }

  ngOnInit() {
    //this.yoyoCart = this.addToCartService.addToCart(yoyo);
  }

}
