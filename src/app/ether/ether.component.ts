import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ether',
  templateUrl: './ether.component.html',
  styleUrls: ['./ether.component.scss']
})
export class EtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addItem(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`committing...\ntitle: ${title.value}\nlink: ${link.value}`);
    return false;
  }

}
