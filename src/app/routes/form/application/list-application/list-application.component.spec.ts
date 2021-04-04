import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListApplicationComponent } from './list-application.component';

describe('ListApplicationComponent', () => {
  let component: ListApplicationComponent;
  let fixture: ComponentFixture<ListApplicationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
