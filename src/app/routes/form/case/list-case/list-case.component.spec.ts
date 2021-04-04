import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCaseComponent } from './list-case.component';

describe('ListCaseComponent', () => {
  let component: ListCaseComponent;
  let fixture: ComponentFixture<ListCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
