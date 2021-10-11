import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  @Input() public name: string;
  @Input() public value: string;
  @Input() public defaultChecked: boolean;
  @Output() public onChange: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
