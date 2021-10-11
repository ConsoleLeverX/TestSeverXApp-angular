import { Component, OnInit } from '@angular/core';
import { INewPerson, INewPersonWithChildren } from 'src/app/types';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public users: INewPersonWithChildren[] = [];

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.tableService.users.asObservable().subscribe((users) => this.users = users);
  }
}
