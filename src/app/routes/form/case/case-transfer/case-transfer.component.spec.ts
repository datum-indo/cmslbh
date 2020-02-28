import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTransferComponent } from './case-transfer.component';

describe('CaseTransferComponent', () => {
  let component: CaseTransferComponent;
  let fixture: ComponentFixture<CaseTransferComponent>;

  beforeEach(async(() => {
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
