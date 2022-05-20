import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShowTeamsComponent } from './show-teams/show-teams.component';
import { ShowplayersComponent } from './showplayers/showplayers.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'createplayer',component:CreatePlayerComponent},
  {path:'createteam',component:CreateTeamComponent},
  {path:'showteams',component:ShowTeamsComponent},
  {path:'showplayers',component:ShowplayersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
