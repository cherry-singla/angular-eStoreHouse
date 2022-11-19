import { TestBed } from '@angular/core/testing';

import { ProductsDbService } from './products-db.service';

describe('ProductsDbService', () => {
  let service: ProductsDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
