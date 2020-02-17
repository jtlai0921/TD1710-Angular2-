import { Component, OnInit } from '@angular/core';
import { GameItem } from '../shared/game-item';
import { GameControl } from '../shared/game-control';
import { GameItemService } from '../game-item.service';
import { GameControlService } from '../game-control.service';
import { GameCoinService } from '../game-coin.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [
    { provide: GameItemService, useClass: GameItemService },
    { provide: GameControlService, useClass: GameControlService },
    { provide: GameCoinService, useClass: GameCoinService }
  ]

})
export class GameComponent implements OnInit {

  constructor(private gameItemService: GameItemService, private gameControlService: GameControlService, private gameCoinService: GameCoinService) {
  }

  ngOnInit() {
    this.gameItemService.add({
      id: 1,
      title: 'Apple',
      price: 5,
      count: 0,
      isActive: false
    });
    this.gameItemService.add({
      id: 2,
      title: 'Orange',
      price: 10,
      count: 0,
      isActive: false
    });
    this.gameItemService.add({
      id: 3,
      title: 'Melon',
      price: 15,
      count: 0,
      isActive: false
    });
    this.gameItemService.add({
      id: 4,
      title: 'Bell',
      price: 20,
      count: 0,
      isActive: false
    });
    this.gameItemService.add({
      id: 5,
      title: 'Watermelon',
      price: 20,
      count: 0,
      isActive: false
    });
    this.gameItemService.add({
      id: 6,
      title: 'Star',
      price: 30,
      count: 0,
      isActive: false
    });
    this.gameItemService.add({
      id: 7,
      title: 'Seven',
      price: 40,
      count: 0,
      isActive: false
    });
    this.gameItemService.add({
      id: 8,
      title: 'BAR',
      price: 100,
      count: 0,
      isActive: false
    });
    //產生隨機清單
    this.gameItemService.getRandomList();
    //增加代幣總數
    this.gameCoinService.addTotalCoin(1000);
  }

  //開始遊戲-判斷是否有購票
  playGame() {
    if (this.gameCoinService.coinObject.usedCoin > 0) {
      this.gameControlService.playGame();
    }
  }

  //停止遊戲
  stopGame() {
    this.gameControlService.stopGame();
  }

  //減少購票
  minusCoin(item) {
    if (this.gameControlService.gameControl.isStart !== true) {
      this.gameCoinService.minusCoin(item);
    }
  }

  //增加購票
  plusCoin(item) {
    if (this.gameControlService.gameControl.isStart !== true) {
      this.gameCoinService.plusCoin(item);
    }
  }

  //計算贏得代幣
  calculateStart() {
    this.gameCoinService.calculateStart();
  }

  //取得贏得代幣
  calculateEnd() {
    this.gameCoinService.calculateEnd();
    this.gameControlService.setIsGet();
  }


}
