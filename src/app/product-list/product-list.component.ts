import { Component, OnInit } from '@angular/core';

import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() {}

  // tslint:disable-next-line:typedef
  share() {
    window.alert('Product is now shared!');
  }

  // tslint:disable-next-line:typedef
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
  }

}
