import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Output() appCart: EventEmitter<any> = new EventEmitter();
  products: Product[] = [];
  loading = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.loading = true;

    this.productsService.getAllProducts()
      .subscribe(products => {
        this.loading = false;
        this.products = products;
      });
  }

  cartData(data) {
    console.log('333333', data)
    this.appCart.emit(data)
  }
}
