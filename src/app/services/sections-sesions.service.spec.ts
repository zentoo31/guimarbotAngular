import { TestBed } from '@angular/core/testing';

import { SectionsSesionsService } from './sections-sesions.service';

describe('SectionsSesionsService', () => {
  let service: SectionsSesionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionsSesionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
