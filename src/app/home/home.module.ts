import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { CoreModule } from '../core/core.module';
import { TableRowComponent } from './table-row/table-row.component';



@NgModule({
  declarations: [
    HomeComponent,
    TableComponent,
    FilterComponent,
    TableRowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  exports: [ HomeComponent ]
})
export class HomeModule { }
