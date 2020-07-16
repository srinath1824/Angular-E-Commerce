import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent implements OnInit {
  @Input() product: Product;
  @Output() cart: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addToCart(product) {
    this.cart.emit(product)
    console.log("222222", product)
  }

}
