import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistancecompComponent } from './assistancecomp.component';

describe('AssistancecompComponent', () => {
  let component: AssistancecompComponent;
  let fixture: ComponentFixture<AssistancecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistancecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistancecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
