import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSingleComponentComponent } from './product-single-component.component';

describe('ProductSingleComponentComponent', () => {
  let component: ProductSingleComponentComponent;
  let fixture: ComponentFixture<ProductSingleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSingleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSingleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
