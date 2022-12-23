import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { ProductService } from './../../../products/service/product.service'
import { Product } from './../../../model/product'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = []
  @Output() Success = new EventEmitter()
  produ_count: string[] = ['1', '2', '3', '4', '5', '6']
  total: number = 0

  constructor(private route: Router, private Products: ProductService) {}

  ngOnInit(): void {
    this.cart = this.Products.getCartProduct()
    this.calculate()
  }
  //function to select Quality
  selectProduct(quality: string, product: Product) {
    const index = this.cart.indexOf(product)
    this.cart[index] = product
    this.cart[index].amount = quality
    localStorage.setItem('prodect11', JSON.stringify(this.cart))
    this.calculate()
  }

  calculate() {
    this.total = this.cart.reduce((acc, item) => {
      this.total = parseFloat((acc + item.price * Number(item.amount)).toFixed(2))
      return this.total
    }, 0)
  }
  // delete item from cart by id
  removeCart(id: number) {
    this.cart = this.cart.filter((item) => item.id !== id)

    this.calculate()
  }
  refresh(): void {
    window.location.reload()
  }

  onSubmit(fullname: string) {
    this.Products.clearCart()
    this.route.navigate([`/${fullname}/${this.total}`])
  }
}
