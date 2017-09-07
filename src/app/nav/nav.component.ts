import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('collapse', [
      state('open', style({
        opacity: '1',
        display: 'block',
        transform: 'translate3d(0, 0, 0)'
      })),
      state('closed',   style({
        opacity: '0',
        display: 'none',
        transform: 'translate3d(-50%, 0, 0)'
      })),
      transition('closed => open', animate('400ms ease-in')),
      transition('open => closed', animate('200ms ease-out'))
    ])
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  collapse:string = 'closed';

  toggleCollapse() {
    this.collapse = this.collapse == 'open' ? 'closed' : 'open';
  }

}
