import { Injectable } from '@angular/core';
import { GameControl } from './shared/game-control';
import { GameItemService } from './game-item.service';

@Injectable()
export class GameControlService {

  gameControl: GameControl = {
    isStart: false,
    isGet: false,
    gameInterval: null
  };
  constructor(private gameItemService: GameItemService) { }

  //遊戲控制功能 START
  //遊戲開始
  playGame(): void {
    this.gameControl.gameInterval = setInterval(() => {
      //呼叫遊戲項目功能的 設定清單提示
      this.gameItemService.setNextItem();
    }, 10);
    this.setIsStart();
  }

  //遊戲結束
  stopGame(): void {
    clearInterval(this.gameControl.gameInterval);
    this.setIsStop();
  }

  //設定開始狀態
  setIsStart() {
    this.gameControl.isStart = true;
    this.gameControl.isGet = false;
  }

  //設定停止狀態
  setIsStop() {
    this.gameControl.isGet = true;
  }

  //設定取得狀態
  setIsGet() {
    this.gameControl.isStart = false;
    this.gameControl.isGet = false;
  }
  //遊戲控制功能 END


}
