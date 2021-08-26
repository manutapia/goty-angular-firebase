import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { Game } from "../../interfaces/interfaces";

import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];
  constructor(private _gameService:GameService) { }

  ngOnInit(): void {
    this._gameService.getNominations().subscribe(nominations=>{
      this.games = nominations;
    })
  }

  voteGame(game:Game){
    this._gameService.voteGame(game.id).subscribe((resp:{ok:boolean, msg:string})=>{
      if (resp.ok) {
        Swal.fire({
          title: 'Thank you!',
          text: resp.msg,
          icon: 'success',
        })
      }else{
        Swal.fire({
          title: 'Oops!',
          text: resp.msg,
          icon: 'error',
        })

      }
    })
  }

}
