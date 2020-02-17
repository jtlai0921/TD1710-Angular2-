import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameItem } from '../shared/game-item';
import { GameControl } from '../shared/game-control';

@Component({
  selector: 'app-bet-items',
  templateUrl: './bet-items.component.html',
  styleUrls: ['./bet-items.component.css']
})
export class BetItemsComponent implements OnInit {

  @Input() items: GameItem[];
  @Output() plusCoinEvent = new EventEmitter();
  @Output() minusCoinEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  minus(item: GameItem) {
    this.minusCoinEvent.emit(item);
  }

  plus(item: GameItem) {
    this.plusCoinEvent.emit(item);
  }


}
