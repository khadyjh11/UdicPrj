import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { ProductListComponent } from '../app/products/components/product-list/product-list.component'
import { CartComponent } from './carts/components/cart/cart.component'
import { CartCheckoutComponent } from './carts/components/cart-checkout/cart-checkout.component'
import { ProductDetailComponent } from './products/components/product-detail/product-detail.component'
import { UsersComponent } from './carts/users/users.component'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProductComponent } from './product/product.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    CartCheckoutComponent,
    ProductDetailComponent,
    UsersComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
