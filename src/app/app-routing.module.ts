import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductDetailComponent } from '../app/products/components/product-detail/product-detail.component'
import { CartComponent } from './carts/components/cart/cart.component'
import { ProductListComponent } from '../app/products/components/product-list/product-list.component'
import { CartCheckoutComponent } from '../app/carts/components/cart-checkout/cart-checkout.component'
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'proDetail/:id', component: ProductDetailComponent },
  { path: 'item', component: CartComponent },
  { path: ':fullname/:total', component: CartCheckoutComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
