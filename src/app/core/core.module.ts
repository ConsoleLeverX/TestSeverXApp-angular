import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RadioButtonComponent } from './input/radio-button/radio-button.component';
import { CheckboxComponent } from './input/checkbox/checkbox.component';

@NgModule({
  declarations: [RadioButtonComponent, CheckboxComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [RadioButtonComponent, CheckboxComponent],
  providers: [DatePipe]
})
export class CoreModule {}
