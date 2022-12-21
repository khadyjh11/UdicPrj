import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    CartComponent,
    CartCheckoutComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartsModule { }
