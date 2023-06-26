import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanConfirmedComponent } from './loan-confirmed.component';

describe('LoanConfirmedComponent', () => {
  let component: LoanConfirmedComponent;
  let fixture: ComponentFixture<LoanConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanConfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
