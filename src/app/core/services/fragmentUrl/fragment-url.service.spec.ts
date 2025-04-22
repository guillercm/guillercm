import { TestBed } from '@angular/core/testing';

import { FragmentUrlService } from './fragment-url.service';

describe('FragmentUrlService', () => {
  let service: FragmentUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FragmentUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
