import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDetails2Component } from './upload-details2.component';

describe('UploadDetails2Component', () => {
  let component: UploadDetails2Component;
  let fixture: ComponentFixture<UploadDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
