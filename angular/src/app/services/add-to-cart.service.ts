import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddToCartService {
  yoyo: any = {};
  yoyoCart: any = [];

  constructor(private http: HttpClient) { }

  addToCart() {
    return this.http.post('http://localhost:3000/api/cart-item', this.yoyo);
  }

  yoyosInCart() {
  //  return this.yoyoCart;
  }

}
