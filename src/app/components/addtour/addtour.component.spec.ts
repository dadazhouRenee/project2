import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtourComponent } from './addtour.component';

describe('AddtourComponent', () => {
  let component: AddtourComponent;
  let fixture: ComponentFixture<AddtourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
