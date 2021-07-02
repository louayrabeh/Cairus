import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisdemandeComponent } from './devisdemande.component';

describe('DevisdemandeComponent', () => {
  let component: DevisdemandeComponent;
  let fixture: ComponentFixture<DevisdemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisdemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
