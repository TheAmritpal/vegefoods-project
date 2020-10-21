import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryComponentComponent } from './add-category-component.component';

describe('AddCategoryComponentComponent', () => {
  let component: AddCategoryComponentComponent;
  let fixture: ComponentFixture<AddCategoryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
