import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BetListComponent } from './bet-list/bet-list.component';
import { BetItemsComponent } from './bet-items/bet-items.component';
import { BetControlComponent } from './bet-control/bet-control.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BetListComponent,
    BetItemsComponent,
    BetControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
