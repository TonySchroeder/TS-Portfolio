import { TestBed } from '@angular/core/testing';

import { InitFunktionsService } from './init-funktions.service';

describe('InitFunktionsService', () => {
  let service: InitFunktionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitFunktionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
