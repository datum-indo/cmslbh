import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CaseConsultationComponent } from './case-consultation.component';

describe('CaseConsultationComponent', () => {
  let component: CaseConsultationComponent;
  let fixture: ComponentFixture<CaseConsultationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
