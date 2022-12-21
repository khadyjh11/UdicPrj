import { Injectable, EventEmitter, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Product } from '../../model/product'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  savaPro = window.localStorage

  constructor(private http: HttpClient) {}
  // funcion get list of products
  getproduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/assets/data.json')
  }
  // add product funcion
  addProduct(product: Product[]): void {
    this.savaPro.setItem('products', JSON.stringify(product))
  }

  //   // get product id funcion
  getProductId(id: number): Observable<Product> {
    const url = `http://localhost:3000/assets/data.json/${id}`
    return this.http.get<Product>(url)
  }
  // funcion to get product in cart
  getCartProduct() {
    const ProIncart = this.savaPro.getItem('products')
    return ProIncart ? JSON.parse(ProIncart) : []
  }

  clearCart(): void {
    this.savaPro.clear()
  }
}
