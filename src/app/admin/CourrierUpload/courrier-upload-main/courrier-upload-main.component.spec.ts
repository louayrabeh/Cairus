import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierUploadMainComponent } from './courrier-upload-main.component';

describe('CourrierUploadMainComponent', () => {
  let component: CourrierUploadMainComponent;
  let fixture: ComponentFixture<CourrierUploadMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrierUploadMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierUploadMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
