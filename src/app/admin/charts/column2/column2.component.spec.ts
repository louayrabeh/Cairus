import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Column2Component } from './column2.component';

describe('Column2Component', () => {
  let component: Column2Component;
  let fixture: ComponentFixture<Column2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Column2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Column2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
