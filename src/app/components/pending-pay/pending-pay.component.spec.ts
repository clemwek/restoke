import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPayComponent } from './pending-pay.component';

describe('PendingPayComponent', () => {
  let component: PendingPayComponent;
  let fixture: ComponentFixture<PendingPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
