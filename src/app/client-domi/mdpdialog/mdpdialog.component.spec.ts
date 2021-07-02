import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDPDialogComponent } from './mdpdialog.component';

describe('MDPDialogComponent', () => {
  let component: MDPDialogComponent;
  let fixture: ComponentFixture<MDPDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDPDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MDPDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
