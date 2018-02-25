import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <section class="hero is-fullheight is-warning">
    <div class="hero-body">
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
