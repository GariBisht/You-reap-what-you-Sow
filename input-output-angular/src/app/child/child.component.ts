import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {

  // we use decorator because value is imported from another component ... import it from angular core package

  // by this data can be pass in child component through prarent .... In React it can be done by using props 
  @Input()
  items = [];
  // @Input()
  // channelName: string ;

  @Output()
  selectedItemEmitter = new EventEmitter();

// this communication only done in 2 stage or components are immediate parent-child are more than 2 levels , 
// so Why So Sad ? Services solve this issue

  constructor() {}

  ngOnInit(): void {}

  selectItem(item) {
    this.selectedItemEmitter.emit(item);
  }
}
