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
      new Item('Free MIT college educattion if you dgaf about a degree', 'https://ocw.mit.edu', 96),
      new Item('@Coinbase we have a project to never have a server more than 30 days old. To demonstrate, we just successfully rolled our entire infrastructure in 24 hours.','htts://whatever.com',299),
      new Item('Rare doggo does a unselfish for lil pupper', 'https://rarepuppers.com', 376),
      new Item('Comcast, AT&T Are Paying Minority Groups To Support Killing Net Neutrality', 'https://techdirt.com',412),
      new Item('Equifax pipes it up on every American with a credit history, not sorry','https://wtf.com',289),
      new Item('What\'s a pro tip all car owners should know?','https://halfrice.net/askricers',155),
      new Item('California officially calls on the feds to reclassify marijuana from a schedule 1 drug ','https://clapsnews.com',419),
      new Item('my fiancé snapped this photo of me last week... my buddy dubbed it "New Age Marlboro Man"','https://halfrice.net/imgs/sdfk7sdfkj892k38',77)
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
