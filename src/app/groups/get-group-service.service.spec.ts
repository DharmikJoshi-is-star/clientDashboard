import { TestBed } from '@angular/core/testing';

import { GetGroupServiceService } from './get-group-service.service';

describe('GetGroupServiceService', () => {
  let service: GetGroupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGroupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
