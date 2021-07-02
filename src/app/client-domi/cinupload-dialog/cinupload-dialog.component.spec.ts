import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CINUploadDialogComponent } from './cinupload-dialog.component';

describe('CINUploadDialogComponent', () => {
  let component: CINUploadDialogComponent;
  let fixture: ComponentFixture<CINUploadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CINUploadDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CINUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
