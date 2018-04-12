import { TestBed, inject } from '@angular/core/testing';

import { UpdateYoyoService } from './update-yoyo.service';

describe('UpdateYoyoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateYoyoService]
    });
  });

  it('should be created', inject([UpdateYoyoService], (service: UpdateYoyoService) => {
    expect(service).toBeTruthy();
  }));
});
