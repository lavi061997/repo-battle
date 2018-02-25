import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a routerLink='/'class='navbar-item'>Repo Battles</a>
    </div>

    <div class='navbar-menu'>
      <div class='navbar-end'>
      <a routerLink = '/' class='navbar-item'>Battle</a>
      <a routerLink = 'create' class='navbar-item'>Create</a>
      <a routerLink = 'leaderboard' class='navbar-item'>Leaderboard</a>
    </div>
    </div>
  </div>
  </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
