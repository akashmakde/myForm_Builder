import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HscComponent } from './hsc.component';

describe('HscComponent', () => {
  let component: HscComponent;
  let fixture: ComponentFixture<HscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
