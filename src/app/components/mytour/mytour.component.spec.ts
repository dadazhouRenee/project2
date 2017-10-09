import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytourComponent } from './mytour.component';

describe('MytourComponent', () => {
  let component: MytourComponent;
  let fixture: ComponentFixture<MytourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
