import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropAgMatComponent } from './drag-and-drop-ag-mat.component';

describe('DragAndDropAgMatComponent', () => {
  let component: DragAndDropAgMatComponent;
  let fixture: ComponentFixture<DragAndDropAgMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropAgMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropAgMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
