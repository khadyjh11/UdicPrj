import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  fullname: string | null = ''
  totalPrice: number | null = 0

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.fullname = params.get('fullname')
      this.totalPrice = Number(params.get('totalPrice'))
    })
  }
}
