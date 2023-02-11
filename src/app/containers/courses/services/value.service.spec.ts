import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService Test Cases ', () => {
  let service: ValueService;
  const arraya = ['mango', 'apple'];
  beforeEach(() => {
    service = new ValueService();
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(ValueService);
  });

  it('#getValue should return reeal time value' , () => {
      expect(service.getValue().length).toBe(2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
