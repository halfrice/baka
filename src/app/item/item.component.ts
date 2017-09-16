import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  host: {
    class: 'wtf'
  }
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor() { 
  }

  upvote(): boolean {
    this.item.upvote();
    return false;
  }

  downvote(): boolean {
    this.item.downvote();
    return false;
  }

  ngOnInit() {
  }

}
