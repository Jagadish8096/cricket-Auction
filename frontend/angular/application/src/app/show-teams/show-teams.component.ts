import { Component, OnInit } from '@angular/core';
import { CreateteamService } from '../createteam.service';

@Component({
  selector: 'app-show-teams',
  templateUrl: './show-teams.component.html',
  styleUrls: ['./show-teams.component.css']
})
export class ShowTeamsComponent implements OnInit {
teams:any
  constructor(private service:CreateteamService) { }

  ngOnInit(){
    let resp1=  this.service.showallteams();
    resp1.subscribe((data)=>this.teams=data)
  }

}
