import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceDetailsComponent } from './piece-details.component';

describe('PieceDetailsComponent', () => {
  let component: PieceDetailsComponent;
  let fixture: ComponentFixture<PieceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
