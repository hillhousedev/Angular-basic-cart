import { Injectable } from '@angular/core';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  // tslint:disable-next-line:typedef
  addToCart(product) {
    this.items.push(product);
  }

  // tslint:disable-next-line:typedef
  getItems() {
    return this.items;
  }

  // tslint:disable-next-line:typedef
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
