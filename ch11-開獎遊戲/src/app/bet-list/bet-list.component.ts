import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from '../shared/game-item';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.css']
})
export class BetListComponent implements OnInit {

  @Input() list: GameItem[];
  constructor() { }

  ngOnInit() {
  }

}
