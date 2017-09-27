import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersafeComponent } from './usersafe.component';

describe('UsersafeComponent', () => {
  let component: UsersafeComponent;
  let fixture: ComponentFixture<UsersafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
