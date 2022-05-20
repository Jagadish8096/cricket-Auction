import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-showplayers',
  templateUrl: './showplayers.component.html',
  styleUrls: ['./showplayers.component.css']
})
export class ShowplayersComponent implements OnInit {
  
  players:any;
  playerName: any;
  player:Player=new Player();
  
  constructor(private service:PlayersService,private router:Router,private route:ActivatedRoute) { }

  
  ngOnInit() {
  let resp=  this.service.showallplayers();
  resp.subscribe((data)=>this.players=data);
  }

 public showPlayer()
  {
    
    
    return this.service.getPlayerByName(this.playerName).subscribe(data=>
      {
        this.players=data;
      });
  }

}
