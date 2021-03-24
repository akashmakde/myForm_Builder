import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEmailAgeComponent } from './name-email-age.component';

describe('NameEmailAgeComponent', () => {
  let component: NameEmailAgeComponent;
  let fixture: ComponentFixture<NameEmailAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameEmailAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameEmailAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
