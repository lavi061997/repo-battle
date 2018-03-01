import { Component, OnInit } from '@angular/core';
import { RepoService } from '@app/core/services/repo.service';

@Component({
  selector: 'app-battle',
  template: `
  <h1 class="title has-text-centered">Battle!</h1>

  <div class="columns">

    <div class="column is-half" *ngFor="let repo of battleRepos">
      <div class="repo-container">
        <img [src]="repo.avatar">
        <div class="caption">{{ repo.caption }}</div>
      </div>

      <a class="button is-info" (click)="voteOnRepo(repo.id)">
        Vote!
      </a>

    </div>
  </div>
  `,
  styles: [
    `
    .repo-container{
      position: relative;
    }
    img{
      width: 100%;
      height: 300px;
      border-radius:3px;
    }
    .caption {
      display:block;
      position:absolute;
      left:20px;
      right:20px;
      bottom:30px;
      text-align:center;
      color: #FFF;
      font-size:30px;
      text-transform:uppercase;
      line-height:1;
      word-break: break-all;
      text-shadow: 1px 1px 3px #000;
    }

    .button{
      display:block;
      width:100%;
    }

    `
  ]
})
export class BattleComponent implements OnInit {
  battleRepos: Array<any>;
  constructor(private repoService: RepoService) { }

  ngOnInit() {
    this.getNewBattle();
  }

  getNewBattle(){
    this.repoService.getBattle()
      .subscribe(repos => this.battleRepos = repos);
  }

  voteOnRepo(id){
    this.repoService.vote(id)
      .subscribe(data => {
        //load a new battle
        this.getNewBattle();

      });
  }

}
