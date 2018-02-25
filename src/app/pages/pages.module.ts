import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './battle/battle.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BattleComponent, LeaderboardComponent, CreateComponent]
})
export class PagesModule { }
