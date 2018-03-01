import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './battle/battle.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [BattleComponent, LeaderboardComponent, CreateComponent]
})
export class PagesModule { }
