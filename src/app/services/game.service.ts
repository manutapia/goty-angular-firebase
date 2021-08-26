import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment"
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games:Game[] = []

  constructor(private http: HttpClient) { }

  getNominations(){
    if (this.games.length > 0) {
      return of(this.games);
    }else{
      return this.http.get<Game[]>(`${environment.urlApi}/api/goty`).pipe(
        tap(
          games => this.games = games
          )
          )
        }
      }
      
  voteGame(id:string){
    return this.http.post(`${environment.urlApi}/api/goty/${id}`,{})
      .pipe(
        catchError(err => {
          return of(err.error)
        })
      )
  }
}
