import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrComponent } from './courr.component';

describe('CourrComponent', () => {
  let component: CourrComponent;
  let fixture: ComponentFixture<CourrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
