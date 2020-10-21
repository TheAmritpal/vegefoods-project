import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryComponentComponent } from './view-category-component.component';

describe('ViewCategoryComponentComponent', () => {
  let component: ViewCategoryComponentComponent;
  let fixture: ComponentFixture<ViewCategoryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCategoryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
