import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteServeComponent } from './complete-serve.component';

describe('CompleteServeComponent', () => {
  let component: CompleteServeComponent;
  let fixture: ComponentFixture<CompleteServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
