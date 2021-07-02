import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratStepComponent } from './contrat-step.component';

describe('ContratStepComponent', () => {
  let component: ContratStepComponent;
  let fixture: ComponentFixture<ContratStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
