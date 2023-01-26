import { TestBed } from '@angular/core/testing';

import { WsApiService } from './ws-api.service';

describe('WsApiService', () => {
  let service: WsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
