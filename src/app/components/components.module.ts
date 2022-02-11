import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { DirectiveModule } from '../directives/directive.module';



@NgModule({
  declarations: [
    CustomButtonComponent
  ],
  exports:[CustomButtonComponent],
  imports: [
    CommonModule,
    DirectiveModule
  ]
})
export class ComponentsModule { }
