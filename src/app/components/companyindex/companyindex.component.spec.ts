import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyindexComponent } from './companyindex.component';

describe('CompanyindexComponent', () => {
  let component: CompanyindexComponent;
  let fixture: ComponentFixture<CompanyindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
