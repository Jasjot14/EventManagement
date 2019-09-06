import { TestBed } from '@angular/core/testing';

import { GeteventbyidService } from './geteventbyid.service';

describe('GeteventbyidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeteventbyidService = TestBed.get(GeteventbyidService);
    expect(service).toBeTruthy();
  });
});
