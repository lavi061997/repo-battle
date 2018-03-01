import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class RepoService {
  apiUrl = 'https://wt-a9f0fd3d7fcc9af37d89739d8bf7100d-0.run.webtask.io/repo-battle';

  constructor(private http: HttpClient) { }
  //Create
  getRandom(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random`);
  }

  //Store a Repo

  save(id: string, name: string, url: string, caption: string): Observable<any>{
    return this.http.post(this.apiUrl, {id, name, url, caption, votes: 0});
  }

  //Battles

  getBattle(): Observable<any>{
    return this.http.get(`${this.apiUrl}/versus`);
  }

  vote(id){
    return this.http.post(`${this.apiUrl}/vote`, { id });
  }

  //Leaderboard

  getLeaderboard(): Observable<any>{
    return this.http.get(`${this.apiUrl}/leaderboard`);
  }
}
