import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactDialogComponent } from './fact-dialog.component';

describe('FactDialogComponent', () => {
  let component: FactDialogComponent;
  let fixture: ComponentFixture<FactDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
