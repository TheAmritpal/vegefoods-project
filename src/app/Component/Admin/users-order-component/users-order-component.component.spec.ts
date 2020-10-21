import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOrderComponentComponent } from './users-order-component.component';

describe('UsersOrderComponentComponent', () => {
  let component: UsersOrderComponentComponent;
  let fixture: ComponentFixture<UsersOrderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersOrderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
