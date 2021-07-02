import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiondemandeComponent } from './questiondemande.component';

describe('QuestiondemandeComponent', () => {
  let component: QuestiondemandeComponent;
  let fixture: ComponentFixture<QuestiondemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestiondemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiondemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
