import { TestBed } from '@angular/core/testing';

import { PieceJusServService } from './piece-jus-serv.service';

describe('PieceJusServService', () => {
  let service: PieceJusServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceJusServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
