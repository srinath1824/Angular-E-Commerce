import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import {CartComponent} from './cart/cart.component'

const routes: Routes = [{
  path: '',
  component: ProductsListComponent,
},
{
  path: 'cart',
  component: CartComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
