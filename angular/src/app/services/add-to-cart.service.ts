import { Injectable } from '@angular/core';
import { YoYo } from '../../../models/YoYo';

@Injectable()
export class AddToCartService {
  yoyo: YoYo;
  yoyoCart: any = [];

  constructor() { }

  addToCart(yoyo) {
    return this.yoyoCart.unshift(this.yoyo);
  }

  yoyosInCart() {
    return this.yoyoCart;
  }

}
