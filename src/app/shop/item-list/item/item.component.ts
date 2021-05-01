import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() product;

  @Output() featureContentClicked = new EventEmitter<null>();
  constructor() { }

  ngOnInit(): void {
  }

  clickHandler() {
    this.featureContentClicked.emit();
  }
}
