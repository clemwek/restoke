import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownSalesComponent } from './breakdown-sales.component';

describe('BreakdownSalesComponent', () => {
  let component: BreakdownSalesComponent;
  let fixture: ComponentFixture<BreakdownSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
