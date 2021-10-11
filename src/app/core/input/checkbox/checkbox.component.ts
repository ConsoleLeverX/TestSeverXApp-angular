import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() public name: string;
  @Input() public isChecked: boolean;
  @Output() public onChange: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
