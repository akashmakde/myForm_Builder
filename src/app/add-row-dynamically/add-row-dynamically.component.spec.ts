import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRowDynamicallyComponent } from './add-row-dynamically.component';

describe('AddRowDynamicallyComponent', () => {
  let component: AddRowDynamicallyComponent;
  let fixture: ComponentFixture<AddRowDynamicallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRowDynamicallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRowDynamicallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
