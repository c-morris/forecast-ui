import { TestBed } from '@angular/core/testing';

import { ForecastTableService } from './forecast-table.service';

describe('ForecastTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForecastTableService = TestBed.get(ForecastTableService);
    expect(service).toBeTruthy();
  });
});
