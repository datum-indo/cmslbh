import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewCaseComponent } from './view-case.component';

describe('ViewCaseComponent', () => {
  let component: ViewCaseComponent;
  let fixture: ComponentFixture<ViewCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
