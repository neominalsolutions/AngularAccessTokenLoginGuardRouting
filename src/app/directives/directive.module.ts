import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightelementDirective } from './highlightelement.directive';



@NgModule({
  declarations: [
    HighlightelementDirective
  ],
  exports: [HighlightelementDirective],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
