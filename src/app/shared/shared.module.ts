import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoComponent } from './components/repo/repo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RepoComponent],
  exports: [RepoComponent]
})
export class SharedModule { }
