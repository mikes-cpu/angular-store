import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() productsList;

  @Output() featureContentClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  clickHandler() {
    this.featureContentClicked.emit();
  }
}
