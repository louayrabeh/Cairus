import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClientDomiComponent } from './home-client-domi.component';

describe('HomeClientDomiComponent', () => {
  let component: HomeClientDomiComponent;
  let fixture: ComponentFixture<HomeClientDomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeClientDomiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClientDomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
