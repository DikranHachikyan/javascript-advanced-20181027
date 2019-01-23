import { TestBed } from '@angular/core/testing';

import { StaticDataSourceService } from './static-data-source.service';

describe('StaticDataSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticDataSourceService = TestBed.get(StaticDataSourceService);
    expect(service).toBeTruthy();
  });
});
