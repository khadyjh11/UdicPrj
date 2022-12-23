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
  totalPrice: number | string = ''

  constructor(private route: Router, private Products: ProductService) {}

  ngOnInit(): void {
    this.cart = this.Products.getCartProduct()

    this.calculate()
  }
  // select quen of prodect
  selectProduct(value: string, product: Product) {
    const index = this.cart.indexOf(product)
    this.cart[index] = product
    this.cart[index].amount = value
    localStorage.setItem('prodect11', JSON.stringify(this.cart))
    this.calculate()
  }

  // calculate the total price and amount
  calculate() {
    this.totalPrice = this.cart.reduce((acc, item) => {
      this.totalPrice = parseFloat((acc + item.price * Number(item.amount)).toFixed(2))
      return this.totalPrice
    }, 0)
  }
  // delete item from cart by id
  removeCart(id: number) {
    const storg = this.Products.getCartProduct()
    //
    const item = storg.filter((itme: Product) => itme.id !== id)

    // update cart wen item remove from cart
    window.localStorage.clear()
    localStorage.setItem('cart', JSON.stringify(item))
    this.refresh()
    this.calculate()
    window.alert('item is deleted')
  }
  refresh(): void {
    window.location.reload()
  }

  // checkout submit
  onSubmit(fullname: string) {
    this.Products.clearCart()
    this.route.navigate([`${fullname}/${this.totalPrice}`])
  }
}
