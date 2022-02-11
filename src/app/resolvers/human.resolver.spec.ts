import { TestBed } from '@angular/core/testing';

import { HumanResolver } from './human.resolver';

describe('HumanResolver', () => {
  let resolver: HumanResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HumanResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
