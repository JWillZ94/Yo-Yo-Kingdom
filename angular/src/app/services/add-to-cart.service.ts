import { Injectable } from '@angular/core';

@Injectable()
export class AddToCartService {
  yoyoCart: any = [];
  yoyo: any;
  yoyos: any;

  constructor() { }

  addToCart() {
    return this.yoyoCart;
  };

}
