import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { CreateteamService } from '../createteam.service';
import { Team } from '../team';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  user:Team=new Team();
  msg = "";

  constructor(private service:CreateteamService,private router :Router) { }

  ngOnInit(): void {
  }
  createteam(){
    this.service.createfromremote(this.user).subscribe
    (
    data=>{alert("Successfully Registred")}
    ,error=>{alert("Already Registred")}
    )
    
  }
}
