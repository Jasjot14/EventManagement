import { TestBed } from '@angular/core/testing';

import { DeleteeventsService } from './deleteevents.service';

describe('DeleteeventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteeventsService = TestBed.get(DeleteeventsService);
    expect(service).toBeTruthy();
  });
});
