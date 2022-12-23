import { Component, OnInit, Input } from '@angular/core'
import { Product } from './../../../model/product'
import { ProductService } from './../../service/product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getproduct().subscribe((res) => {
      this.items = res
    })
  }
}
