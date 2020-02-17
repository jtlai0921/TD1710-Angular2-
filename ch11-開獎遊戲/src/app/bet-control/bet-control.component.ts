import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoinObject } from '../shared/coin-object';
import { GameControl } from '../shared/game-control';

@Component({
  selector: 'app-bet-control',
  templateUrl: './bet-control.component.html',
  styleUrls: ['./bet-control.component.css']
})
export class BetControlComponent implements OnInit {

  @Input() coinObject: CoinObject;
  @Input() gameControl: GameControl;
  @Output() playGameEvent = new EventEmitter();
  @Output() stopGameEvent = new EventEmitter();
  @Output() calculateStartEvent = new EventEmitter();
  @Output() calculateEndEvent = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  start(): void {
    this.playGameEvent.emit();
  }

  stop(): void {
    this.stopGameEvent.emit();
    this.calculateStartEvent.emit();
  }

  get(): void {
    this.calculateEndEvent.emit();
  }


}
