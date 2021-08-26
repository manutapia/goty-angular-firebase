import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ready:boolean = false;
  games:any[] = []

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
      .pipe(
        map((games:Game[])=> games.map( ({name, votes}) => ({name, value: votes}) ))
      )
      .subscribe(formattedGames=>{
        this.ready = true;
        this.games = formattedGames
      })
  }

}
