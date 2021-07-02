import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerdialogComponent } from './donnerdialog.component';

describe('DonnerdialogComponent', () => {
  let component: DonnerdialogComponent;
  let fixture: ComponentFixture<DonnerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnerdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
