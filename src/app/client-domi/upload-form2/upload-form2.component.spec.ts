import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadForm2Component } from './upload-form2.component';

describe('UploadForm2Component', () => {
  let component: UploadForm2Component;
  let fixture: ComponentFixture<UploadForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
