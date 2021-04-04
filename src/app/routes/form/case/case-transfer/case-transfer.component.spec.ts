import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CaseTransferComponent } from './case-transfer.component';

describe('CaseTransferComponent', () => {
  let component: CaseTransferComponent;
  let fixture: ComponentFixture<CaseTransferComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
