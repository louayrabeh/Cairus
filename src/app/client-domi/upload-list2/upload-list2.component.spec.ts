import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadList2Component } from './upload-list2.component';

describe('UploadList2Component', () => {
  let component: UploadList2Component;
  let fixture: ComponentFixture<UploadList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
