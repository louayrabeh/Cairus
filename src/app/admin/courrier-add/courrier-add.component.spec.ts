import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierAddComponent } from './courrier-add.component';

describe('CourrierAddComponent', () => {
  let component: CourrierAddComponent;
  let fixture: ComponentFixture<CourrierAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrierAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
