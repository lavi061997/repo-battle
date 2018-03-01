import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  template: `
  <div class="repo-container">

    <img [src]="avatar">
    <div class="field">
      Name:{{name}}
      <br>
      <a [href]="html_url">Open Repo!</a>
    </div>
    <div class="caption">{{ caption }}</div>
  </div>
  `,
  styles: []
})
export class RepoComponent implements OnInit {
  //@Input() avatar: string;
  //@Input() name: string;
  //@Input() html_url: string;
  //@Input() caption: string; 
  constructor() { }

  ngOnInit() {
  }

}
