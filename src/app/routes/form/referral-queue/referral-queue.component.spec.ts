import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReferralQueueComponent } from './referral-queue.component';

describe('ReferralQueueComponent', () => {
  let component: ReferralQueueComponent;
  let fixture: ComponentFixture<ReferralQueueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
