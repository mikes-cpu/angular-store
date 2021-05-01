import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  productList = []
  currentPrice: number = 0;

  constructor() { }

  addProduct(product) {
    this.productList.push(product);
  }

  addPrice(product) {
    this.currentPrice += parseInt(product.price);
  }

  getProductList() {
    return this.productList;
  }

  getCurrentPrice() {
    return this.currentPrice;
  }
}
