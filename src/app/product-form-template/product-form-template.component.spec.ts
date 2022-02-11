import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormTemplateComponent } from './product-form-template.component';

describe('ProductFormTemplateComponent', () => {
  let component: ProductFormTemplateComponent;
  let fixture: ComponentFixture<ProductFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFormTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
