import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapatQueueComponent } from './rapat-queue.component';

describe('RapatQueueComponent', () => {
  let component: RapatQueueComponent;
  let fixture: ComponentFixture<RapatQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapatQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapatQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
