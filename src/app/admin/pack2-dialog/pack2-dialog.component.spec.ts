import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pack2DialogComponent } from './pack2-dialog.component';

describe('Pack2DialogComponent', () => {
  let component: Pack2DialogComponent;
  let fixture: ComponentFixture<Pack2DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pack2DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pack2DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
