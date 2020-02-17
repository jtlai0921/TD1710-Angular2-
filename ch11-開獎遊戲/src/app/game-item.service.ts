import { Injectable } from '@angular/core';
import { GameItem } from './shared/game-item';

@Injectable()
export class GameItemService {

  items: GameItem[] = [];
  list: GameItem[] = [];


  constructor() { }


  //清單項目控制功能 START
  //增加項目
  add(value: GameItem): void {
    this.items.push(value);
  }

  //隨機清單
  getRandomList(): void {
    let size = this.items.length - 1;
    for (let loop = 0; loop < 24; loop++) {
      let index = Math.round(Math.random() * size);
      let gameItem = Object.assign({}, this.items[index]);
      this.list.push(gameItem);
    }
  }

  //設定清單提示
  setNextItem(): void {
    let activeIndex = this.getActiveIndex();
    let nextIndex = this.getListNextIndex();
    this.list[activeIndex].isActive = false;
    this.list[nextIndex].isActive = true;
  }

  //重設項目提示
  resetItemActive(): void {
    this.items.forEach(function (value, index) {
      value.isActive = false;
    });
  }

  //取得清單提示項目
  getActive(): GameItem {
    for (var index = 0; index < this.list.length; index++) {
      if (this.list[index].isActive === true) {
        return this.list[index];
      }
    }
    return this.list[0];
  }

  //取得提示索引
  getActiveIndex(): number {
    return this.list.indexOf(this.getActive());
  }

  //取得下個提示索引
  getListNextIndex(): number {
    let activeIndex = this.getActiveIndex();
    return (activeIndex > this.list.length - 2) ? 0 : (activeIndex + 1);
  }

  //取得提示中的ID
  getActiveId(): number {
    return this.getActive().id;
  }

  //清單項目控制功能 END

}
