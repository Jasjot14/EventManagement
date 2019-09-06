import { TestBed } from '@angular/core/testing';

import { GeteventsService } from './getevents.service';

describe('GeteventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeteventsService = TestBed.get(GeteventsService);
    expect(service).toBeTruthy();
  });
});
