import { TestBed, inject } from '@angular/core/testing';

import { RetroService } from './retro.service';

describe('RetroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetroService]
    });
  });

  it('should be created', inject([RetroService], (service: RetroService) => {
    expect(service).toBeTruthy();
  }));
});
