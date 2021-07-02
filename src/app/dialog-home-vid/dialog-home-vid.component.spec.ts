import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHomeVidComponent } from './dialog-home-vid.component';

describe('DialogHomeVidComponent', () => {
  let component: DialogHomeVidComponent;
  let fixture: ComponentFixture<DialogHomeVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHomeVidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHomeVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
