import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOrderDetailsComponentComponent } from './users-order-details-component.component';

describe('UsersOrderDetailsComponentComponent', () => {
  let component: UsersOrderDetailsComponentComponent;
  let fixture: ComponentFixture<UsersOrderDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersOrderDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersOrderDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
