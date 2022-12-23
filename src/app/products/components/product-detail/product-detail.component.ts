import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { ProductService } from './../../service/product.service'

import { Product } from './../../../model/product'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number | null = null
  products: Product[] = []
  product: Product | null = null
  Quality: string[] = ['1', '2', '3', '4', '5']
  select = '1'

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'))
    })
    this.productService.getproduct().subscribe((res) => {
      this.products = res
      this.product = this.getProductId(this.id)
      console.log(this.product)
    })
  }

  selectQun(quantity: any) {
    this.select = quantity
  }
  // get proudect Id
  getProductId(id: number | null): Product {
    return this.products.filter((a) => a.id === id)[0]
  }

  addTocart(product: Product) {
    const cart: Product[] = this.productService.getCartProduct()
    let newProduct = cart.find((itm) => itm.id === itm.id)
    if (newProduct) {
      newProduct.amount = this.select
      newProduct ? this.productService.addProduct(cart) : null
      window.alert('add to cart')
    } else {
      cart.push(Object.assign(product, { amount: this.select }))
      this.productService.addProduct(cart)
    }
  }
  refresh(): void {
    window.location.reload()
  }
}
