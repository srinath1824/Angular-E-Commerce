import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CartComponent} from './cart/cart.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snipcart-angular-sanity';
  cart = [];
  viewModel = false;
  constructor(public dialog: MatDialog) {}
  cartData(data) {
    this.cart.push(data)
  }
  viewCart(cartData) {
    // this.router.navigate(['cart']);
    this.viewModel = !this.viewModel;
    const dialogRef = this.dialog.open(CartComponent, {data: cartData});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
