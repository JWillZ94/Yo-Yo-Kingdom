import { TestBed, inject } from '@angular/core/testing';

import { DeleteYoyoService } from './delete-yoyo.service';

describe('DeleteYoyoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteYoyoService]
    });
  });

  it('should be created', inject([DeleteYoyoService], (service: DeleteYoyoService) => {
    expect(service).toBeTruthy();
  }));
});
