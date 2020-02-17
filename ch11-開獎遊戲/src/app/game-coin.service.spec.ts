import { TestBed, inject } from '@angular/core/testing';

import { GameCoinService } from './game-coin.service';

describe('GameCoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameCoinService]
    });
  });

  it('should be created', inject([GameCoinService], (service: GameCoinService) => {
    expect(service).toBeTruthy();
  }));
});
