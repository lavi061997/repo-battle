import { Component, OnInit } from '@angular/core';
import { RepoService } from '@app/core/services/repo.service';
@Component({
  selector: 'app-create',
  template: `

<h1 class="title has-text-centred"> Create a Repo</h1>

  <div class="box">

    <div class="repo-container" *ngIf="randomRepo">

      <img [src]="randomRepo.avatar">
      <div class="field">
        Name:{{randomRepo.name}}
        <br>
        <a [href]="randomRepo.html_url">Open Repo!</a>
      </div>
      <div class="caption">{{ caption }}</div>
    </div>
    <div class="field">
    <input type="text" class="input" [(ngModel)]="caption">
    </div>
    <a class="button is-success" (click)="saveRepo()">
    Create
    </a>
  </div>
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

    .button {
      display:block;
      width: 100%;
    }

    .box{
      max-width:50%;
      margin: 0 auto;
    }
    `
  ]
})
export class CreateComponent implements OnInit {
  randomRepo;
  caption = '';
  constructor(private repoService: RepoService) { }

  ngOnInit() {
    this.getRandomRepo();
  }

  getRandomRepo(){
      this.repoService.getRandom().subscribe(repo => this.randomRepo = repo);
  }

  saveRepo(){
    this.repoService.save(this.randomRepo.id, this.randomRepo.name, this.randomRepo.avatar, this.caption)
      .subscribe(data => {
        this.getRandomRepo();
        this.caption = '';
      });

  }

}
