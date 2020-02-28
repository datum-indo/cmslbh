import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationQueueComponent } from './consultation-queue.component';

describe('ConsultationQueueComponent', () => {
  let component: ConsultationQueueComponent;
  let fixture: ComponentFixture<ConsultationQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
