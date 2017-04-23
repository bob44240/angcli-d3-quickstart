import { TestBed, inject } from '@angular/core/testing';

import { D3TestService } from './d3-test.service';

describe('D3TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [D3TestService]
    });
  });

  it('should ...', inject([D3TestService], (service: D3TestService) => {
    expect(service).toBeTruthy();
  }));
});
