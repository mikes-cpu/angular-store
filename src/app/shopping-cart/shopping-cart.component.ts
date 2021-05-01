import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  currentTotal: number = 0;

  products;

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.products = this.shared.getProductList()
    this.currentTotal = this.shared.getCurrentPrice()
  }

}
