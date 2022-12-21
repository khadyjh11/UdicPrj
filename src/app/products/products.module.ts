import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './product/product.component'

@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent, ProductComponent],
  imports: [CommonModule]
})
export class ProductsModule {}
