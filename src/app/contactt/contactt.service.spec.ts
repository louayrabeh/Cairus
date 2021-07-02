import { TestBed } from '@angular/core/testing';

import { ContacttService } from './contactt.service';

describe('ContacttService', () => {
  let service: ContacttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContacttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
