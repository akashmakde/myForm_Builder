import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormArrayExComponent } from './nested-form-array-ex.component';

describe('NestedFormArrayExComponent', () => {
  let component: NestedFormArrayExComponent;
  let fixture: ComponentFixture<NestedFormArrayExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedFormArrayExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormArrayExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
