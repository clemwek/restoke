import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoldComponent } from './edit-sold.component';

describe('EditSoldComponent', () => {
  let component: EditSoldComponent;
  let fixture: ComponentFixture<EditSoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
