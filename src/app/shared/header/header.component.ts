import { Component, OnInit } from '@angular/core'
import { ProductService } from '../../products/service/product.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // public totalItems: number = 0
  constructor() {}

  ngOnInit(): void {
    // this.cart.getproduct().subscribe((res) => {
    //   this.totalItems = res.length
    // })
  }
}
