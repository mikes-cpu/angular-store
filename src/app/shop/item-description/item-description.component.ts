import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss']
})
export class ItemDescriptionComponent implements OnInit {
  @Input() featureProductDetails;

  @Output() backButtonClick = new EventEmitter<boolean>();
  @Output() addToCartClick = new EventEmitter<Object>();


  constructor() { }

  ngOnInit(): void {
  }

  backButton() {
    this.backButtonClick.emit(false)
  }

  addToCartButton(addedProduct) {
    this.addToCartClick.emit(addedProduct)
  }
}
