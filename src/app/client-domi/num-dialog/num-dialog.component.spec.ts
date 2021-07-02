import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumDialogComponent } from './num-dialog.component';

describe('NumDialogComponent', () => {
  let component: NumDialogComponent;
  let fixture: ComponentFixture<NumDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
