import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDRopComponent } from './drag-and-drop.component';

describe('DragAndDRopComponent', () => {
  let component: DragAndDRopComponent;
  let fixture: ComponentFixture<DragAndDRopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDRopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDRopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
