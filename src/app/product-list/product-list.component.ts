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

  ngOnInit(): void {
  }

}
