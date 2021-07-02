import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pack3DialogComponent } from './pack3-dialog.component';

describe('Pack3DialogComponent', () => {
  let component: Pack3DialogComponent;
  let fixture: ComponentFixture<Pack3DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pack3DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pack3DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
