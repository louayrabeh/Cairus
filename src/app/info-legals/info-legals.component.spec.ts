import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLegalsComponent } from './info-legals.component';

describe('InfoLegalsComponent', () => {
  let component: InfoLegalsComponent;
  let fixture: ComponentFixture<InfoLegalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLegalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLegalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
