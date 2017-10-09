import { TestBed, inject } from '@angular/core/testing';

import { TournoteService } from './tournote.service';

describe('TournoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournoteService]
    });
  });

  it('should be created', inject([TournoteService], (service: TournoteService) => {
    expect(service).toBeTruthy();
  }));
});
