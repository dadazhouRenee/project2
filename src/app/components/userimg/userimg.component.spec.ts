import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserimgComponent } from './userimg.component';

describe('UserimgComponent', () => {
  let component: UserimgComponent;
  let fixture: ComponentFixture<UserimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
