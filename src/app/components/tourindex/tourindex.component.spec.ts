import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourindexComponent } from './tourindex.component';

describe('TourindexComponent', () => {
  let component: TourindexComponent;
  let fixture: ComponentFixture<TourindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
