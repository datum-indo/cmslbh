import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonComponent } from './list-person.component';

describe('ListPersonComponent', () => {
  let component: ListPersonComponent;
  let fixture: ComponentFixture<ListPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
