import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pack1DialogComponent } from './pack1-dialog.component';

describe('Pack1DialogComponent', () => {
  let component: Pack1DialogComponent;
  let fixture: ComponentFixture<Pack1DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pack1DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pack1DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
