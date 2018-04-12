import { TestBed, inject } from '@angular/core/testing';

import { CreateYoyoService } from './create-yoyo.service';

describe('CreateYoyoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateYoyoService]
    });
  });

  it('should be created', inject([CreateYoyoService], (service: CreateYoyoService) => {
    expect(service).toBeTruthy();
  }));
});
