import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPipe } from './task.pipe';



@NgModule({
  declarations: [
    TaskPipe
  ],
  providers:[TaskPipe],
  exports:[TaskPipe], // bir component veya pipe olsun başka bir module de kullanılacak ise exports ile dışarı moduleden çıkarılır.
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
