import { TestBed, inject } from '@angular/core/testing';

import { GameItemService } from './game-item.service';

describe('GameItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameItemService]
    });
  });

  it('should be created', inject([GameItemService], (service: GameItemService) => {
    expect(service).toBeTruthy();
  }));
});
