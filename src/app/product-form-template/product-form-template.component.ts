import { Component, OnInit } from '@angular/core';
import { ValidationMessages } from '../consts/validation-message';

@Component({
  selector: 'app-product-form-template',
  templateUrl: './product-form-template.component.html',
  styleUrls: ['./product-form-template.component.css'],
})
export class ProductFormTemplateComponent implements OnInit {
  usernameMessage = '';

  public get Messages() {
    return ValidationMessages;
  }

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event) {
    console.log('event', event);
  }
}
