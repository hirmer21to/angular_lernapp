import { TestBed } from '@angular/core/testing';

import { ModiService } from './modi.service';

describe('ModiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModiService = TestBed.get(ModiService);
    expect(service).toBeTruthy();
  });
});
