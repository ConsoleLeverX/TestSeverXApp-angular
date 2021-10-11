import { Component, Input, OnInit } from '@angular/core';
import { INewPersonWithChildren } from 'src/app/types';

@Component({
  selector: 'tbody[app-table-row], tr[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
})
export class TableRowComponent implements OnInit {

  @Input() public user: INewPersonWithChildren;
  @Input() public isChildren: boolean;

  public isSubRowExists: boolean;
  public isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isSubRowExists = this.user.subRows.length;
  }

}
