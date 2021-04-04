import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CasePkComponent } from './case-pk.component';

describe('CasePkComponent', () => {
  let component: CasePkComponent;
  let fixture: ComponentFixture<CasePkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CasePkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
