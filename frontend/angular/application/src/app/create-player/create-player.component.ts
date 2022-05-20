import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


import { PlayersService } from '../players.service';
import { Player } from '../player';
@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {
  user1:Player=new Player();
  msg = "";
  constructor(private service:PlayersService,private router :Router) { }

  ngOnInit(): void {
  }
  createplayer(){

    this.service.playerfromremote(this.user1).subscribe
    (
    data=>{alert("Successfully Registred")}
    ,error=>{alert("player can't be added to team as it excceds team budgets ")}
    )
  }
}
