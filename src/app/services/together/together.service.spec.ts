import { TestBed, inject } from '@angular/core/testing';

import { TogetherService } from './together.service';

describe('TogetherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TogetherService]
    });
  });

  it('should be created', inject([TogetherService], (service: TogetherService) => {
    expect(service).toBeTruthy();
  }));
});
