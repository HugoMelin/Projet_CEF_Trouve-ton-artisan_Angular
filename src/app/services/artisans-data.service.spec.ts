import { TestBed } from '@angular/core/testing';

import { ArtisansDataService } from './artisans-data.service';

describe('ArtisansDataService', () => {
  let service: ArtisansDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisansDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
