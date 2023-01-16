import { Component, OnInit, Input } from '@angular/core'
import { Product } from 'src/app/model/product'
import { ProductService } from '../products/service/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() items!: Product
  produ_count: string[] = ['1', '2', '3', '4', '5', '6']
  select = '1'
  ngOnInit(): void {}
  constructor(private productService: ProductService) {}
  // select amount
  selectQun(quantity: any) {
    this.select = quantity
  }

  //add product to cart
  addTocart(product: Product) {
    const cart: Product[] = this.productService.getCartProduct()
    console.log(cart)
    let newProduct = cart.find((item) => item.id === product.id)
    console.log(newProduct, 'prod')
    // loop to chiek if new proudect
    if (newProduct) {
      newProduct.amount = this.select
      newProduct ? this.productService.addProduct(cart) : null
      window.alert('add to cart')
    } else {
      cart.push(Object.assign(product, { amount: this.select }))
      this.productService.addProduct(cart)
    }
    this.refresh()
  }
  refresh(): void {
    window.location.reload()
  }
}
