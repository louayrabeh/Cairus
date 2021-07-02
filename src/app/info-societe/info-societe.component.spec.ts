import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSocieteComponent } from './info-societe.component';

describe('InfoSocieteComponent', () => {
  let component: InfoSocieteComponent;
  let fixture: ComponentFixture<InfoSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSocieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
