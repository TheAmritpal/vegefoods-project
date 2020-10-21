import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleComponentComponent } from './blog-single-component.component';

describe('BlogSingleComponentComponent', () => {
  let component: BlogSingleComponentComponent;
  let fixture: ComponentFixture<BlogSingleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSingleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
