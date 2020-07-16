import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() count: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
