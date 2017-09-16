import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item.model';

@Component({
  selector: 'app-ether',
  templateUrl: './ether.component.html',
  styleUrls: ['./ether.component.scss']
})
export class EtherComponent implements OnInit {
  items: Item[];

  constructor() { 
    this.items = [
      new Item('halfrice.net, your entertainment content portal!',
        'https://halfrice.net', 420),
      new Item('Ethereum is up a shit ton', 'https://ethereum.com', 314),
      new Item('Fullstack webdev shit', 'https://freecodecamp.com', 113),
      new Item('Reddit is dead', 'https://reddit.com', 112),
      new Item('What is DevOps really?', 'https://devops.org', 230),
      new Item('Free MIT college educattion if you dgaf about a degree', 'https://ocw.mit.edu', 96)
    ]
  }

  ngOnInit() {
  }

  addItem(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`committing...\ntitle: ${title.value}\nlink: ${link.value}`);
    this.items.push(new Item(title.value, link.value, 100));
    title.value = '';
    link.value = '';
    return false;
  }

  sortItems(): Item[] {
    return this.items.sort((i: Item, j: Item) => j.votes-i.votes);
  }

}
