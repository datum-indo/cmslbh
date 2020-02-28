import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDocumentComponent } from './case-document.component';

describe('CaseDocumentComponent', () => {
  let component: CaseDocumentComponent;
  let fixture: ComponentFixture<CaseDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
