import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() productsList;

  @Output() featureContentClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onFeatureContentClicked() {
    this.featureContentClicked.emit();
  }
}
