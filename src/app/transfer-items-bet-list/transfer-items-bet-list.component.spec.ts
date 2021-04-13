import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferItemsBetListComponent } from './transfer-items-bet-list.component';

describe('TransferItemsBetListComponent', () => {
  let component: TransferItemsBetListComponent;
  let fixture: ComponentFixture<TransferItemsBetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferItemsBetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferItemsBetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
