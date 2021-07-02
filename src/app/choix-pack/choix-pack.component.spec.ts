import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPackComponent } from './choix-pack.component';

describe('ChoixPackComponent', () => {
  let component: ChoixPackComponent;
  let fixture: ComponentFixture<ChoixPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
