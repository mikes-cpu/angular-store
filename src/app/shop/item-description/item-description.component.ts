import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss']
})
export class ItemDescriptionComponent implements OnInit {
  @Input() featureProductDetails;

  @Output() backButtonClick = new EventEmitter<boolean>();
  // @Output() addToCartClick = new EventEmitter<Object>();


  constructor(private shared: SharedService) { }

  ngOnInit(): void {

  }

  backButton() {
    this.backButtonClick.emit(false)
  }

  addToCartButton(addedProduct) {
    this.shared.addProduct(addedProduct)
    this.shared.addPrice(addedProduct)
  }
}
