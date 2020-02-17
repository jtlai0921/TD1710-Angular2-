import { Injectable } from '@angular/core';
import { GameItem } from './shared/game-item';
import { CoinObject } from './shared/coin-object';
import { GameItemService } from './game-item.service';

@Injectable()
export class GameCoinService {

  coinObject: CoinObject = {
    totalCoin: 0,
    usedCoin: 0,
    winCoin: 0
  };
  constructor(private gameItemService: GameItemService) { }

  //代幣控制功能 START

  //增加總代幣
  addTotalCoin(value: number): void {
    this.coinObject.totalCoin += value;
  }

  //增加購票代幣
  plusCoin(item: GameItem): void {
    if (this.coinObject.totalCoin >= this.coinObject.usedCoin + item.price) {
      item.count += 1;
      this.coinObject.usedCoin += item.price;
    }
  }

  //減少購票代幣
  minusCoin(item: GameItem): void {
    if (item.count > 0) {
      item.count -= 1;
      this.coinObject.usedCoin -= item.price;
    }
  }

  //重設單局代幣
  resetPlayCoin(): void {
    this.coinObject.usedCoin = 0;
    this.coinObject.winCoin = 0;
    this.gameItemService.items.forEach(function (value, index) {
      value.count = 0;
    });
  }

  //計算贏得代幣
  calculateStart(): void {
    let activeId = this.gameItemService.getActiveId();
    let winItem = this.gameItemService.items.filter(GameItem => GameItem.id === activeId)[0];
    winItem.isActive = true;
    this.coinObject.winCoin = winItem.count * winItem.price * 2;
  }

  //結算代幣
  calculateEnd(): void {
    this.coinObject.totalCoin -= this.coinObject.usedCoin;
    this.coinObject.totalCoin += this.coinObject.winCoin;
    this.resetPlayCoin();
    this.gameItemService.resetItemActive();
  }
  //代幣控制功能 END

}
