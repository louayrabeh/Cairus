import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationClientDomiComponent } from './navigation-client-domi.component';

describe('NavigationClientDomiComponent', () => {
  let component: NavigationClientDomiComponent;
  let fixture: ComponentFixture<NavigationClientDomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationClientDomiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationClientDomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
