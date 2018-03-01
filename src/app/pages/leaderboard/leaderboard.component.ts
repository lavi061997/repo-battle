import { Component, OnInit } from '@angular/core';
import { RepoService } from '@app/core/services/repo.service';

@Component({
  selector: 'app-leaderboard',
  template: `
  <h1 class="title has-text-centered">Leaderboard</h1>

  <table class="title is-bordered is-hover is-striped" *ngIf="leaderboardRepos">
    <tbody>

      <tr *ngFor="let repo of leaderboardRepos; let i = index">
        <td>{{ i + 1 }}</td>
        <td>
        <div class="repo-container">
        {{ repo.name }}
        <a [href]="repo.html_url">
          <img [src]="repo.avatar">
        </a>
          <div class="caption">{{ caption }}</div>
        </div>
        </td>
        <td>{{ repo.votes }}</td>
      </tr>
    </tbody>
  </table>
  `,
  styles: [
    `
    .repo-container{
      position: relative;
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

    img{
        width:100%;
        max-height:800px;
        border-radius:3px;
    }
    `
  ]
})
export class LeaderboardComponent implements OnInit {
  leaderboardRepos: Array<any>;
  constructor(private repoService: RepoService) { }

  ngOnInit() {
    this.getLeaderboard();
  }

  getLeaderboard(){
    this.repoService.getLeaderboard()
      .subscribe(repos => this.leaderboardRepos = repos);
  }

}
